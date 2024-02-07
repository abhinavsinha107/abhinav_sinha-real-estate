import express from "express";
import User from "../models/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// @desc Login a user
// @route POST /users
// @access Private
const loginUser = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "Please provide all credentials...",
            });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "User does not exist...",
            });
        }
        const validPassword = bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(403).json({
                message: "Wrong Password...",
            });
        }
        const authToken = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET_KEY || "",
            { expiresIn: "40m" }
        );
        const refreshToken = jwt.sign(
            { userId: user._id },
            process.env.JWT_REFRESH_SECRET_KEY || "",
            { expiresIn: "1d" }
        );
        res.cookie("authToken", authToken, { httpOnly: true });
        res.cookie("refreshToken", refreshToken, { httpOnly: true });
        res.status(200).json({ message: "Login Successfull...", user, token: authToken });
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

const logoutUser = async (req: express.Request, res: express.Response) => {
    try {
        res.clearCookie("authToken");
        res.clearCookie("refreshToken");
        return res.status(200).json({
            message: "Logout Successfull..."
        })
    } catch (err) {
        return res.status(500).json({
            message: "Unable to logout..."
        })
    }
}

export default { loginUser, logoutUser }