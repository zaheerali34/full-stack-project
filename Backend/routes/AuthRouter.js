import { Signup, Login, Logout } from "../Controllers/AuthController.js";
import userVerification from "../Middlewares/AuthMiddleware.js";
import { Router } from "express";

const router = Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/logout", Logout);
router.post('/', userVerification);

export default router;
