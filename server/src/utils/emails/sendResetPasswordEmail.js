import sendEmail from "./sendEmail.js";
import resetPasswordEmailTemplate from "./templates/resetPasswordEmailTemplate.js";

const sendResetPasswordEmail = async ({ fullName, email, passwordToken, origin }) => {
  return sendEmail({
    to: email,
    subject: "MLC: Hey Chief! Here's your Reset Password Link",
    html: resetPasswordEmailTemplate({ fullName, email, passwordToken, origin }),
  });
};

export default sendResetPasswordEmail;
