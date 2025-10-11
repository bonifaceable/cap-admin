export const AlertTemplate = ({ userName, transactionType, creditAmount }) => {
  const emailTemp = `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Account Update</title>
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
          Great news! Your account has been credited.
        </p>
        <p style="font-size: 16px; line-height: 1.5; font-weight: bold;">
          Transaction Details:
        </p>
        <ul style="text-align: left; font-size: 16px; line-height: 1.5; padding-left: 20px;">
          <li>Type: ${transactionType}</li>
          <li>Amount: $${creditAmount}</li>
          <li>Date: ${new Date().toLocaleDateString()}</li>
        </ul>
        <p style="font-size: 16px; line-height: 1.5;">
          Your current balance has been updated accordingly. Thank you for being an active member of Cryptech.
        </p>
        <p style="font-size: 16px; line-height: 1.5;">
          Need assistance? Our support team is here for you.
        </p>
        <p>For inquiries: <strong>info@cryp-tech.com</strong></p>
        <p>For support: <strong>support@cryp-tech.com</strong></p>
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

export const WithdrawalApprovedTemplate = ({
  userName = "Investor",
  amount = "0.00",
  brandName = "Capital Plus",
  dashboardUrl = "https://www.cap-plus.online/dashboard",
  supportEmail = "info@cap-plus.online",
  logoUrl,
  primaryColor = "#6675F5",
} = {}) => {
  const year = new Date().getFullYear();

  return `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <title>Withdrawal Approved - ${brandName}</title>
  </head>
  <body style="margin:0;padding:0;background:#F6F7FB;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F6F7FB;">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table width="600" cellspacing="0" cellpadding="0" style="background:#fff;border-radius:12px;overflow:hidden;">
            
            <!-- Header -->
            <tr>
              <td align="center" style="background:${primaryColor};padding:32px 20px;">
                ${
                  logoUrl
                    ? `<img src="${logoUrl}" alt="${brandName}" style="max-width:180px;height:auto;"/>`
                    : `<div style="font:700 28px/1.1 Arial,sans-serif;color:#fff;">${brandName}</div>`
                }
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:32px 24px;text-align:center;">
                <span style="display:inline-block;padding:8px 14px;border:1px solid #16a34a;border-radius:999px;background:#ECFDF5;color:#166534;font:600 14px Arial;">✅ Withdrawal Approved</span>
                <h1 style="margin:16px 0 12px;font:700 26px Arial;color:#111827;">Hi ${userName},</h1>
                <p style="margin:0 auto 20px;max-width:520px;font:400 16px/1.6 Arial;color:#374151;">
                  Great news! Your withdrawal request of <strong>$${amount}</strong> has been <strong>approved</strong> by our team.  
                  The amount has been <strong>debited</strong> from your wallet and processed successfully.
                </p>
              </td>
            </tr>

            <!-- CTA -->
            <tr>
              <td align="center" style="padding:10px 24px 28px;">
                <a href="${dashboardUrl}" style="display:inline-block;padding:14px 22px;background:${primaryColor};color:#fff;text-decoration:none;border-radius:10px;font:700 16px Arial;">
                  View Your Wallet
                </a>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:16px 24px 26px;text-align:center;border-top:1px solid #E5E7EB;">
                <p style="margin:0 0 6px;font:400 13px Arial;color:#6B7280;">
                  Need help? Contact us at 
                  <a href="mailto:${supportEmail}" style="color:${primaryColor};text-decoration:none;">${supportEmail}</a>
                </p>
                <p style="margin:6px 0 0;font:400 12px Arial;color:#9CA3AF;">
                  © ${year} ${brandName}. All rights reserved.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>`;
};
