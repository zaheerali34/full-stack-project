import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from "cors";
import cookieParser from 'cookie-parser';
import authRoute  from './routes/AuthRouter.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
const mongoURL = process.env.MONGOURL;

// Middleware
app.use(
    cors({
        origin: ["http://localhost:5173"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
)

app.use(express.json());
app.use(cookieParser());
app.use("/", authRoute)

// MongoDB connection
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURL, {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });
        console.log("MongoDB is connected successfully");
    } catch (err) {
        console.error("MongoDB connection error:", err.message);
        console.error("\nPlease check:");
        console.error("1. Your IP is whitelisted in MongoDB Atlas Network Access");
        console.error("2. Your MONGOURL in .env is correct");
        console.error("3. Your MongoDB Atlas cluster is running");
        process.exit(1);
    }
};

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

