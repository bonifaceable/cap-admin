export const SignupTemplate = ({ userName }) => {
  const emailTemp = `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Registration Successful</title>
  </head>
  <body>
    <div
      style="
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        text-align: center;
      "
      class="email-container"
    >
      <img
        src="https://res.cloudinary.com/dwrmw2fsn/image/upload/v1728234621/logo-dark_kriifz.png"
        alt="Cryptech Logo"
      />
      <div style="padding: 20px; text-align: center" class="content">
        <p style="font-size: 16px; line-height: 1.5;">
          Hi ${userName},
        </p>
        <p style="font-size: 16px; line-height: 1.5;">
          Welcome to Capital Plus! We're excited to have you on board. Start exploring our investment plans and make the most of your journey with us.
        </p>
        <p style="font-size: 16px; line-height: 1.5; font-weight: bold;">
          Here's what you can do next:
        </p>
        <ul style="text-align: left; font-size: 16px; line-height: 1.5; padding-left: 20px;">
          <li>Explore our investment plans and choose what suits you best.</li>
          <li>Credit your wallet to easily purchase plans.</li>
          <li>Invite friends and earn rewards when they join using your referral link!</li>
        </ul>
        <p style="font-size: 16px; line-height: 1.5;">
          Need help? Our support team is here for you.
        </p>
        <p style="font-size: 16px; line-height: 1.5;">
          Thank you for joining!
        </p>
        <p style="font-size: 16px; line-height: 1.5;">
            For inquiries: <strong>info@cryp-tech.com</strong>
          </p>
          <p style="font-size: 16px; line-height: 1.5;">
            For support: <strong>support@worldcoin</strong>
          </p>
      </div>
      <div
        style="
          text-align: center;
          padding: 10px;
          font-size: 12px;
          color: #999999;
          border-top: 1px solid #eeeeee;
          margin-top: 20px;
        "
        class="footer"
      >
        <p>&copy; 2024 Cryptech. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>
  
  `;

  return emailTemp;
};
