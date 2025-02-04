const resetPasswordEmailTemplate = ({ fullName, passwordToken, email, origin }) => {
  const resetPasswordRedirectURL = `${origin}/user/reset-password?token=${passwordToken}&email=${email}`;

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reset Your Password</title>
  </head>
  <body style="font-family: Arial, sans-serif; background-color: #f9fafb; margin: 0; padding: 20px;">
      <table role="presentation" style="width: 100%; max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; padding: 20px; border: 1px solid #e5e7eb;">
          <tr>
              <td style="text-align: center; padding-bottom: 20px;">
                  <h2 style="color: #374151; font-size: 24px;">Mahalakshmi Cerramics</h2>
              </td>
          </tr>
          <tr>
              <td style="text-align: center; font-size: 16px; color: #4b5563;">
                  <p>Hello <strong>${fullName}</strong>,</p>
                  <p>Reset your password by clicking the button below:</p>
              </td>
          </tr>
          <tr>
              <td style="text-align: center; padding: 20px 0;">
                  <a href="${resetPasswordRedirectURL}" style="display: inline-block; padding: 12px 24px; background-color: #3b82f6; color: #ffffff; text-decoration: none; font-weight: bold; border-radius: 6px;">
                      Reset Password
                  </a>
              </td>
          </tr>
          <tr>
              <td style="text-align: center; font-size: 14px; color: #6b7280; padding-top: 20px;">
                  <p>If you didn't request this, you can ignore this email.</p>
              </td>
          </tr>
          <tr>
              <td style="text-align: center; font-size: 12px; color: #9ca3af; padding-top: 10px;">
                  <p>&copy; ${new Date().getFullYear()} Mahalakshmi Cerramics. All Rights Reserved.</p>
              </td>
          </tr>
      </table>
  </body>
  </html>
  `;
};

export default resetPasswordEmailTemplate;
