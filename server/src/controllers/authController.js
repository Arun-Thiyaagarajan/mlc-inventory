import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError, UnauthenticatedError } from "../errors/index.js";
import { EUserRoles } from "../enums/Enums.js";
import { sendVerificationEmail, generateCryptoString, createTokenUser, attachCookiesToResponse, sendResetPasswordEmail, createHash } from "../utils/index.js";
import Token from "../models/Token.js";

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

  if (!user.isVerified) {
    throw new UnauthenticatedError("Please verify your email");
  }

  const tokenUser = createTokenUser(user);
  // create refresh token
  let refreshToken = "";
  // check for existing token
  const existingToken = await Token.findOne({ user: user._id });

  if (existingToken) {
    const { isValid } = existingToken;
    if (!isValid) {
      throw new UnauthenticatedError("Invalid Credentials");
    }
    refreshToken = existingToken.refreshToken;
    await existingToken.save();
  } else {
    refreshToken = generateCryptoString();
    const userAgent = req.headers["user-agent"];
    const ip = req.ip;
    const usertoken = {
      refreshToken,
      ip,
      userAgent,
      user: user._id,
    };
    await Token.create(usertoken);
  }

  attachCookiesToResponse({ res, user: tokenUser, refreshToken });

  res.status(StatusCodes.OK).json({ user: tokenUser });
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    const passwordToken = generateCryptoString();
    //send email
    await sendResetPasswordEmail({
      name: user.name,
      email: user.email,
      passwordToken: passwordToken,
      origin: "http://localhost:5173",
    });

    const tenMinutes = 1000 * 60 * 10;
    const passwordTokenExpiration = new Date(Date.now() + tenMinutes);
    user.passwordToken = createHash(passwordToken);
    user.passwordTokenExpiration = passwordTokenExpiration;
    await user.save();
  }

  res.status(StatusCodes.OK).json({ msg: "Please check your email for the password reset link!" });
};

const resetPassword = async (req, res) => {
  const { token, email, password } = req.body;
  if (!token || !email || !password) {
    throw new BadRequestError("Please provide all required values");
  }
  const user = await User.findOne({ email });
  if (user) {
    const currentTime = new Date();
    if (user.passwordToken === createHash(token) && currentTime < user.passwordTokenExpiration) {
      user.password = password;
      user.passwordTokenExpiration = "";
      user.passwordToken = "";
      await user.save();
    } else {
      throw new UnauthenticatedError("Reset Password Link Expired");
    }
  }

  res.status(StatusCodes.OK).json({ msg: `Password reseted successfully!` });
};

export {
  register,
  login,
  verifyEmail,
  forgotPassword,
  resetPassword,
};
