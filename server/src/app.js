import express, { json } from "express";
import { config } from "dotenv";
import "express-async-errors";
// other packages
import cookieParser from "cookie-parser";
import helmet from "helmet";
import xss from "xss-clean";
import cors from "cors";
import mongoSanitize from "express-mongo-sanitize";
import { v2 } from "cloudinary";
import fileUpload from "express-fileupload";
// database
import connectDB from "./db/connect.js";
// routes
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import uploadRouter from "./routes/uploadRoute.js";
import tilesRouter from "./routes/tilesRouter.js";
// middlewares
import { errorHandlerMiddleware, notFoundMiddleware } from "./middleware/index.js";

config();
const app = express();
const port = process.env.PORT || 5001;

// Others
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(xss());
app.use(mongoSanitize());
app.use(fileUpload({ useTempFiles: true }));
v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});


// Middlewares
app.use(json());
app.use(cookieParser(process.env.JWT_SECRET));

// All Routes
const base_url = "/api/v1";
app.use(`${base_url}/auth`, authRouter);
app.use(`${base_url}/user`, userRouter);
app.use(`${base_url}/products/uploads`, uploadRouter);
app.use(`${base_url}/products/tiles`, tilesRouter);

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
