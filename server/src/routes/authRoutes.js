import { Router } from "express";
import { login, register, verifyEmail } from "../controllers/authController.js";

const router = new Router();

router.post("/register", register);
router.post("/verify-account", verifyEmail);
router.post("/login", login);

export default router;
