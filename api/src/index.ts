import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/dbConnection";

const app = express();
const PORT = process.env.PORT || 8000;

// Connect to database
connectDB();

app.use(express.json());