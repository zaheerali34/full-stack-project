import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from "cors";
import cookieParser from 'cookie-parser';
import authRoute  from './routes/AuthRouter.js';
import userVerification from './Middlewares/AuthMiddleware.js';

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


app.get("/user", userVerification, (req, res) => {
    res.json({});
});


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
    }
};

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

