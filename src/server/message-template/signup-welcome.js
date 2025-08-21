// signup-welcome.js
export const WelcomeSignupTemplate = ({
  userName = "Investor",
  email = "user@example.com",
  brandName = "Capital Plus",
  dashboardUrl = "#",
  supportEmail = "support@worldcoin.com",
  accountStatus = "PENDING APPROVAL",
  accountType = "Standard Professional",
  expectedApproval = "Within 24 hours",
  logoUrl, // optional: show a logo inside the purple header
  primaryColor = "#6675F5", // purple header + CTA
} = {}) => {
  const year = new Date().getFullYear();

  const emailTemp = `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Welcome to ${brandName}</title>
  </head>
  <body style="margin:0;padding:0;background:#F6F7FB;">
    <!-- preheader (hidden in most clients) -->
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
      Welcome to ${brandName}. Your account is ${accountStatus.toLowerCase()}.
    </div>

    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F6F7FB;">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="width:600px;max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;">
            <!-- Header -->
            <tr>
              <td align="center" style="background:${primaryColor};padding:32px 20px;">
                ${
                  logoUrl
                    ? `<img src="${logoUrl}" alt="${brandName}" style="max-width:180px;height:auto;display:block;" />`
                    : `<div style="font:700 28px/1.1 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;color:#ffffff;">${brandName}</div>`
                }
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:28px 24px 8px;text-align:center;">
                <span style="display:inline-block;padding:8px 14px;border:1px solid #16a34a;border-radius:999px;background:#ECFDF5;color:#166534;font:600 14px/1.2 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;">🎉 Welcome Aboard!</span>
              </td>
            </tr>

            <tr>
              <td style="padding:12px 24px 0;text-align:center;">
                <h1 style="margin:0 0 8px 0;font:700 28px/1.2 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;color:#111827;">Hello ${userName}!</h1>
                <p style="margin:0 auto 22px auto;max-width:520px;font:400 16px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;color:#374151;">
                  You’ve just joined one of the most exclusive investment platforms in the industry. At <strong>${brandName}</strong>, we help investors like you pursue strong returns with modern tools and professional management.
                </p>
              </td>
            </tr>

            <!-- Account Details Card -->
            <tr>
              <td style="padding:0 24px 8px 24px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #E5E7EB;border-radius:12px;">
                  <tr>
                    <td style="padding:18px 18px 8px 18px;">
                      <div style="font:700 18px/1.3 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;color:#111827;">👤 Your Account Details</div>
                      <div style="height:1px;background:#E5E7EB;margin:12px 0 8px 0;"></div>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:0 18px 14px 18px;">
                      <div style="font:600 13px/1.4 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;color:#6B7280;margin-bottom:4px;">Email Address:</div>
                      <a href="mailto:${email}" style="font:600 15px/1.5 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;color:${primaryColor};text-decoration:none;">${email}</a>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:0 18px 14px 18px;">
                      <div style="font:600 13px/1.4 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;color:#6B7280;margin-bottom:4px;">Account Status:</div>
                      <span style="display:inline-block;padding:6px 10px;border-radius:999px;background:#FEF3C7;color:#92400E;font:700 12px/1 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;letter-spacing:.3px;text-transform:uppercase;">
                        ${accountStatus}
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:0 18px 14px 18px;">
                      <div style="font:600 13px/1.4 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;color:#6B7280;margin-bottom:4px;">Account Type:</div>
                      <div style="font:600 15px/1.5 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;color:#111827;">${accountType}</div>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:0 18px 20px 18px;">
                      <div style="font:600 13px/1.4 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;color:#6B7280;margin-bottom:4px;">Expected Approval:</div>
                      <div style="font:600 15px/1.5 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;color:#111827;">${expectedApproval}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Next Steps -->
            <tr>
              <td style="padding:18px 24px 0 24px;">
                <div style="font:700 18px/1.3 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;color:#111827;margin-bottom:10px;">🚀 Your Next Steps</div>

                ${[
                  {
                    title: "Account Verification",
                    body: "Our compliance team will review and approve your account within 24 hours.",
                  },
                  {
                    title: "Fund Your Account",
                    body: "Add funds to your account to start investing with our professional platform.",
                  },
                  {
                    title: "Choose an AI-Powered Plan",
                    body: "Pick an investment plan that fits your goals. Always review risks before investing.",
                  },
                ]
                  .map(
                    (s, i) => `
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 12px 0;">
                    <tr>
                      <td valign="top" width="36" style="padding:6px 0;">
                        <div style="width:28px;height:28px;border-radius:999px;background:#EEF2FF;color:#4F46E5;text-align:center;font:700 14px/28px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;">${i + 1}</div>
                      </td>
                      <td style="padding:6px 0;">
                        <div style="font:700 16px/1.4 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;color:#111827;">${s.title}</div>
                        <div style="font:400 14px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;color:#4B5563;">${s.body}</div>
                      </td>
                    </tr>
                  </table>`
                  )
                  .join("")}
              </td>
            </tr>

            <!-- CTA -->
            <tr>
              <td align="center" style="padding:6px 24px 28px;">
                <a href="${dashboardUrl}" style="display:inline-block;padding:14px 22px;background:${primaryColor};color:#ffffff;text-decoration:none;border-radius:10px;font:700 16px/1 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;">
                  Access Your Dashboard
                </a>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:16px 24px 26px;text-align:center;border-top:1px solid #E5E7EB;">
                <p style="margin:0 0 6px 0;font:400 13px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;color:#6B7280;">
                  Questions? Our dedicated support team is available 24/7 at
                  <a href="mailto:${supportEmail}" style="color:${primaryColor};text-decoration:none;">${supportEmail}</a>
                </p>
                <p style="margin:6px 0 0 0;font:400 12px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;color:#9CA3AF;">
                  © ${year} ${brandName}. All rights reserved. | Licensed &amp; Regulated Financial Services Provider
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>`;

  return emailTemp;
};
