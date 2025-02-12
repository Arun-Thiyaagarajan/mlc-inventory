import { getAllTiles } from "../controllers/tilesController.js";
import { Router } from "express";


const router = Router();

router.route('/').get(getAllTiles);

export default router;