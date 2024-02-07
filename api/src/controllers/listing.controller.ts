import express from "express";
import Listing from "../models/listing.model";

// @desc Create a listing
// @route POST /listings
// @access Private
const createNewListing = async (req: express.Request, res: express.Response) => {
    try {
        const { name, description, address, price, imageUrl } = req.body;
        
    } catch (err) {
        return res.status(500).json({ message: "Unable to create listing" })
    }
}

export default { createNewListing }