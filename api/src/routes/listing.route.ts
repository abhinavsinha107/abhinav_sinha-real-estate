import express from "express";
import listingController from "../controllers/listing.controller";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const router = express.Router();

router.route("/")
    .post(isAuthenticated, listingController.createNewListing)

export default router;