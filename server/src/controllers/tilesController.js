import { StatusCodes } from "http-status-codes";


export const getAllTiles = (req, res) => { 
  res.status(StatusCodes.OK).json({ tiles: 'tiles' });
};