export const SupportTeamTemplate = ({ userData }) => {
    const emailTemp = `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Support Contact Notification</title>
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
        alt="Company Logo"
        style="max-width: 150px;"
      />
      <div style="padding: 20px; text-align: left" class="content">
        <h2>New Support Contact</h2>
        <p style="font-size: 16px; line-height: 1.5;">
          You have received a new support inquiry. Here are the details:
        </p>
        <ul style="font-size: 16px; line-height: 1.5; padding-left: 20px;">
          <li><strong>Name:</strong> ${userData.name}</li>
          <li><strong>Email:</strong> ${userData.email}</li>
          <li><strong>Phone:</strong> ${userData.phone}</li>
          <li><strong>Subject:</strong> ${userData.subject}</li>
          <li><strong>Message:</strong></li>
        </ul>
        <p style="font-size: 16px; line-height: 1.5; margin-left: 20px;">
          ${userData.message}
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
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>

  
  `;
  
    return emailTemp;
  };
  