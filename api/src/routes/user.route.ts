import express from "express";
import userController from "../controllers/user.controller";
import { isAuthenticated } from "../middlewares/isAuthenticated";
// import passport from "passport";
// import { passportMiddleware } from "../middlewares/passportMiddleware";

// passportMiddleware(passport);

const router = express.Router();

router.get("/", isAuthenticated, userController.getAllUsers)
router.post("/", userController.createNewUser)

export default router;