import { StatusCodes } from "http-status-codes";


const getCurrentUserDetails = (req, res) => {
  res.status(StatusCodes.OK).json({ user: req.user });
}

export { 
  getCurrentUserDetails,
};