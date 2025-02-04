import { StatusCodes } from "http-status-codes";


const errorHandlerMiddleware = async (err, req, res, next) => {
    // Default error 
    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        message: err.message || 'Something went wrong! Try again later.',
    };

    if (err.name === 'ValidationError') {
        customError.message = Object.values(err.errors)
            .map(err => err.message)
            .join(', ');
        customError.statusCode = StatusCodes.BAD_REQUEST;
    }

    if (err.code && err.code === 11000) {
        customError.message = `Duplicate value entered for 
        ${Object.keys(err.keyValue)} field, please choose another value`;
        customError.statusCode = StatusCodes.BAD_REQUEST;
    }

    if (err.name === 'CastError') {
        customError.message = `No item found with id : ${err.value}`;
        customError.statusCode = StatusCodes.NOT_FOUND;
    }

    res.status(customError.statusCode).json({ message: customError.message });
}

export default errorHandlerMiddleware;