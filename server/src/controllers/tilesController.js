import { StatusCodes } from "http-status-codes";
import Tiles from "../models/products/Tiles.js";


export const createTiles = async (req, res) => {
  const products = await Tiles.create(req.body);
  res.status(StatusCodes.CREATED).json({ products, message: 'Tile added to inventory' });
};

export const getAllTiles = async (req, res) => {
  const products = await Tiles.find({});
  res.status(StatusCodes.OK).json({ products, totalCount: products.length });
};