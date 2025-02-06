import { Router } from "express";
import { forgotPassword, login, logout, register, resetPassword, verifyEmail } from "../controllers/authController.js";
import { authenticateUser } from "../middleware/index.js";

const router = new Router();

router.post("/register", register);
router.post("/verify-account", verifyEmail);
router.post("/login", login);
router.delete("/logout", authenticateUser, logout);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;
