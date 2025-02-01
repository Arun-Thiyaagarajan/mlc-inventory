const verifyEmailTemplate = ({ fullName, verificationToken, email, origin }) => {
  const verifyEmailRedirectURL = `${origin}/auth/verify-account?token=${verificationToken}&email=${email}`;

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Verification</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #ffffff;
              color: #222222;
              margin: 0;
              padding: 0;
          }
          .container {
              max-width: 600px;
              margin: 40px auto;
              padding: 20px;
              border: 1px solid #ddd;
              border-radius: 10px;
              text-align: center;
              background-color: #ffffff;
          }
          .header {
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 20px;
          }
          .message {
              font-size: 16px;
              margin-bottom: 20px;
          }
          .btn {
              display: inline-block;
              padding: 12px 24px;
              color: #222222;
              background-color: #ffffff;
              text-decoration: none;
              font-size: 16px;
              font-weight: bold;
              border: 1px solid #aaaaaa;
              border-radius: 5px;
              transition: all 0.3s ease;
              opacity: 1;
          }
          .btn:hover {
            border: 1px solid #999999;
            opacity: 0.7;
          }
          .footer {
              margin-top: 20px;
              font-size: 12px;
              color: #777;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">Verify Your Email</div>
          <div class="message">
              Hello <strong>${fullName}</strong>,
              <br><br>
              Please confirm your email by clicking the button below:
          </div>
          <a href="${verifyEmailRedirectURL}" class="btn">Verify Email</a>
          <div class="footer">
              If you didn't request this, you can ignore this email.
          </div>
      </div>
  </body>
  </html>
  `;
};

export default verifyEmailTemplate;
