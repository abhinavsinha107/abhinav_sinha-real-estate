import express from "express";
import authController from "../controllers/auth.controller";

const router = express.Router();

router.route("/")
    .post(authController.loginUser)
    .get(authController.logoutUser)

export default router;