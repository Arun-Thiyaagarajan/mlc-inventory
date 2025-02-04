import { Router } from "express";
import { forgotPassword, login, register, resetPassword, verifyEmail } from "../controllers/authController.js";

const router = new Router();

router.post("/register", register);
router.post("/verify-account", verifyEmail);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;
