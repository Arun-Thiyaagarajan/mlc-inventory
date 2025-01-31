import { StatusCodes } from "http-status-codes";

const notFoundMiddleware = async (req, res) => res.status(StatusCodes.NOT_FOUND).send("Route Not Found!!!");

export default notFoundMiddleware;