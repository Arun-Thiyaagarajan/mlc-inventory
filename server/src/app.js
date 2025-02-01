import express, { json } from "express";
import { config } from "dotenv";
import "express-async-errors";
// other packages
import cookieParser from "cookie-parser";
import helmet from "helmet";
import xss from "xss-clean";
import cors from "cors";
import mongoSanitize from "express-mongo-sanitize";

// database
import connectDB from "./db/connect.js";
// routes
import authRouter from "./routes/authRoutes.js";
// middlewares
import { errorHandlerMiddleware, notFoundMiddleware } from "./middleware/index.js";

config();
const app = express();
const port = process.env.PORT || 5001;

// Others
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(mongoSanitize());


// Middlewares
app.use(json());
app.use(cookieParser(process.env.JWT_SECRET));

// All Routes
const base_url = "/api/v1";
app.use(`${base_url}/auth`, authRouter);

// Error Handler Middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

async function start() {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("Database connection established!");
    app.listen(port, console.log(`Server Listening on port: http://localhost:${port}`));
  } catch (error) {
    console.log(error);
  }
}

start();
