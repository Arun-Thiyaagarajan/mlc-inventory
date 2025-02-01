import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError, UnauthenticatedError } from "../errors/index.js";
import { EUserRoles } from "../enums/Enums.js";
import { sendVerificationEmail, generateCryptoString } from "../utils/index.js";

const register = async (req, res) => {
  const { fullName, email, password } = req.body;
  console.log(req.body);
  const userAlreadyExist = await User.findOne({ email });
  if (userAlreadyExist) {
    throw new BadRequestError("User already exists");
  }

  // first registered user is an admin
  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? EUserRoles.ADMIN : EUserRoles.USER;

  const verificationToken = generateCryptoString();

  const user = await User.create({ fullName, email, password, role, verificationToken });
  const origin = "http://localhost:5173";

  await sendVerificationEmail({
    fullName: user.fullName,
    email: user.email,
    verificationToken: user.verificationToken,
    origin,
  });

  res.status(StatusCodes.CREATED).json({
    msg: "Success! Please check your email to verify account",
  });
  // res.status(StatusCodes.CREATED).json({ user });
};

const verifyEmail = async (req, res) => {
  const { verificationToken, email } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.verificationToken !== verificationToken) {
    throw new UnauthenticatedError("Verification Failed");
  }
  user.isVerified = true;
  user.verified = Date.now();
  user.verificationToken = "";
  await user.save();

  res.status(StatusCodes.OK).json({ msg: `${email} is verified successfully!` });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new NotFoundError("User not found");
  }

  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    throw new UnauthenticatedError("Invalid password");
  }

  res.status(StatusCodes.OK).json({ user });
};

export { register, login, verifyEmail };
