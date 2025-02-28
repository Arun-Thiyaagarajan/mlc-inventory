import { createTiles, getAllTiles } from "../controllers/tilesController.js";
import { Router } from "express";


const router = Router();

router
  .route('/')
  .post(createTiles)
  .get(getAllTiles);

export default router;