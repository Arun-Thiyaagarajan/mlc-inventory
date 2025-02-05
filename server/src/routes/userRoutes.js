import { getCurrentUserDetails } from "../controllers/userController.js";
import { Router } from "express";
import { authenticateUser } from "../middleware/index.js";

const router = Router();

router.route('/current-user').get(authenticateUser, getCurrentUserDetails);

export default router;