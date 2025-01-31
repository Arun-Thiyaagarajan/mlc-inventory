import User from "@models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError, UnauthenticatedError } from "@errors/index.js";
import { EUserRoles } from "@enums/Enums.js";
import { sendVerificationEmail, generateCryptoString } from "@utils/index.js";

const register = async (req, res) => {
  const { fullName, email, password } = req.body;

  const userAlreadyExist = await User.findOne({ email });
  if (userAlreadyExist) {
    throw new BadRequestError("User already exists");
  }

  // first registered user is an admin
  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? EUserRoles.ADMIN : EUserRoles.USER;

  const verificationToken = generateCryptoString();

  const user = await User.create({ fullName, email, password, role, verificationToken });
  const origin = "http://localhost:3000";

  await sendVerificationEmail({
    fullName: user.fullName,
    email: user.email,
    verificationToken: user.verificationToken,
    origin,
  });

  res.status(StatusCodes.CREATED).json({ user });
  // res.status(StatusCodes.CREATED).json({
  //   msg: "Success! Please check your email to verify account",
  // });
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

export { register, login };
