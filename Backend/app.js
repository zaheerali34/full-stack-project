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
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
)

app.use(express.json());
app.use(cookieParser());
app.use("/", authRoute)

// MongoDB connection
mongoose.connect(mongoURL)
.then(()=> console.log("MongoDB is connected successfully"))
.catch((err)=> console.log(err))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

