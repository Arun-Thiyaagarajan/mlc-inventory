import sendEmail from "./sendEmail.js";
import verifyEmailTemplate from "./templates/verifyEmailTemplate.js";

const sendVerificationEmail = async ({ fullName, email, verificationToken, origin }) => {
  return sendEmail({
    to: email,
    subject: "MLC: You're Almost There! Verify Your Email Now",
    html: verifyEmailTemplate({ fullName, verificationToken, email, origin }),
  });
};

export default sendVerificationEmail;
