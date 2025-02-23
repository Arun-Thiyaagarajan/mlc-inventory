import uploadProductImage from "../controllers/uploadsController.js";
import { Router } from "express";

const router = Router();

router.route('/').post(uploadProductImage);

export default router;