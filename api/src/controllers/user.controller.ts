import express from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = async (req: express.Request, res: express.Response) => {
    try {
        // Get all users from MongoDB
        const users = await User.find().select('-password').lean();
        // If no users 
        if (!users.length) {
            return res.status(400).json({ message: 'No users found' });
        }
        res.json(users);
    } catch (err) {
        return res.status(500).json({ message: "Unable to fetch users" });
    }
}

// @desc Create a new user
// @route POST /users
// @access Private
const createNewUser = async (req: express.Request, res: express.Response) => {
    try {
        const { username, email, password } = req.body;
        // Confirm data
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        // Check for Validation
        const emailExpression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const passwordExpression: RegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if (!emailExpression.test(email.toString())) {
            return res.status(400).json({ message: "Invalid email address format" });
        }
        if (!passwordExpression.test(password.toString())) {
            return res.status(400).json({
                message: "Enter valid password in range 7-15 with uppercase, lowercase, number & @",
            });
        }
        // Check for duplicate username
        const duplicate = await User.findOne({ email }).lean().exec();
        if (duplicate) {
            return res.status(409).json({ message: 'User already exist' });
        }
        // Hash password 
        const hashedPwd = await bcrypt.hash(password, 10); // salt rounds
        const user = new User({
            username,
            email,
            password: hashedPwd,
        });
        await user.save();
        return res.status(201).json({ message: `New user ${username} created`, id: user._id });
    } catch (err) {
        return res.status(500).json({ message: "Unable to create user" })
    }
}

export default {getAllUsers, createNewUser}