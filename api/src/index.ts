import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import connectDB from "./config/dbConnection";
import userRoutes from "./routes/user.route";
import authRoutes from "./routes/auth.route";
import listingRoutes from "./routes/listing.route";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 8000;

// Connect to database
connectDB();

app.use(cookieParser())
app.use(cors());
app.use(express.json());

//Routes
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/listings", listingRoutes);

// MongoDB Connection
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error', err => {
    console.log(err)
})