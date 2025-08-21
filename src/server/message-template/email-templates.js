// email-templates.js

// ---------- Shared base layout ----------
const BaseEmail = ({
  brandName = "Capital Plus",
  primaryColor = "#6675F5",
  logoUrl, // optional
  preheader = "",
  pillText, // e.g., "Account Approved"
  heading = "",
  introHtml = "",
  bodyHtml = "",
  ctaText,
  ctaUrl = "#",
  supportEmail = "support@Capital Plus.com",
}) => {
  const year = new Date().getFullYear();

  return `<!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${heading ? heading : brandName}</title>
  </head>
  <body style="margin:0;padding:0;background:#F6F7FB;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${preheader}</div>

    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F6F7FB;">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="width:600px;max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;">
            <tr>
              <td align="center" style="background:${primaryColor};padding:32px 20px;">
                ${
                  logoUrl
                    ? `<img src="${logoUrl}" alt="${brandName}" style="max-width:180px;height:auto;display:block;" />`
                    : `<div style="font:700 28px/1.1 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;color:#ffffff;">${brandName}</div>`
                }
              </td>
            </tr>

            ${
              pillText
                ? `<tr>
                     <td style="padding:24px 24px 6px;text-align:center;">
                       <span style="display:inline-block;padding:8px 14px;border:1px solid #16a34a;border-radius:999px;background:#ECFDF5;color:#166534;font:600 14px/1.2 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;">${pillText}</span>
                     </td>
                   </tr>`
                : ""
            }

            <tr>
              <td style="padding:10px 24px 0;text-align:center;">
                ${
                  heading
                    ? `<h1 style="margin:0 0 8px 0;font:700 26px/1.25 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;color:#111827;">${heading}</h1>`
                    : ""
                }
                ${introHtml}
              </td>
            </tr>

            ${bodyHtml}

            ${
              ctaText
                ? `<tr>
                     <td align="center" style="padding:6px 24px 28px;">
                       <a href="${ctaUrl}" style="display:inline-block;padding:14px 22px;background:${primaryColor};color:#ffffff;text-decoration:none;border-radius:10px;font:700 16px/1 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;">${ctaText}</a>
                     </td>
                   </tr>`
                : ""
            }

            <tr>
              <td style="padding:16px 24px 26px;text-align:center;border-top:1px solid #E5E7EB;">
                <p style="margin:0 0 6px 0;font:400 13px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;color:#6B7280;">
                  Questions? We’re here 24/7 at
                  <a href="mailto:${supportEmail}" style="color:${primaryColor};text-decoration:none;">${supportEmail}</a>
                </p>
                <p style="margin:6px 0 0 0;font:400 12px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;color:#9CA3AF;">
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

// ---------- Small helpers ----------
const badge = (text, tone = "neutral") => {
  const map = {
    success: { bg: "#ECFDF5", fg: "#166534" },
    warn: { bg: "#FEF3C7", fg: "#92400E" },
    info: { bg: "#DBEAFE", fg: "#1D4ED8" },
    danger: { bg: "#FEE2E2", fg: "#991B1B" },
    neutral: { bg: "#F3F4F6", fg: "#374151" },
  };
  const { bg, fg } = map[tone] || map.neutral;
  return `<span style="display:inline-block;padding:6px 10px;border-radius:999px;background:${bg};color:${fg};font:700 12px/1 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;letter-spacing:.3px;text-transform:uppercase;">${text}</span>`;
};

const detailRow = (label, valueHtml) => `
  <tr>
    <td style="padding:0 18px 14px 18px;">
      <div style="font:600 13px/1.4 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;color:#6B7280;margin-bottom:4px;">${label}</div>
      <div style="font:600 15px/1.5 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;color:#111827;">${valueHtml}</div>
    </td>
  </tr>`;

const detailsCard = (title, rowsHtml) => `
  <tr>
    <td style="padding:0 24px 8px 24px;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #E5E7EB;border-radius:12px;">
        <tr>
          <td style="padding:18px 18px 8px 18px;">
            <div style="font:700 18px/1.3 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;color:#111827;">${title}</div>
            <div style="height:1px;background:#E5E7EB;margin:12px 0 8px 0;"></div>
          </td>
        </tr>
        ${rowsHtml}
      </table>
    </td>
  </tr>`;

// ---------- 1) Account status changes ----------
export const AccountStatusTemplate = ({
  userName = "Investor",
  status = "approved", // approved | blocked | unblocked | rejected | pending
  reason, // optional
  email = "user@example.com",
  dashboardUrl = "#",
  brandName = "Capital Plus",
  supportEmail = "support@Capital Plus.com",
  logoUrl,
  primaryColor = "#6675F5",
}) => {
  const tone =
    status === "approved" || status === "unblocked"
      ? "success"
      : status === "blocked" || status === "rejected"
        ? "danger"
        : status === "pending"
          ? "warn"
          : "neutral";

  const nice =
    status === "approved"
      ? "Account Approved"
      : status === "blocked"
        ? "Account Blocked"
        : status === "unblocked"
          ? "Account Unblocked"
          : status === "rejected"
            ? "Account Rejected"
            : "Account Pending";

  const introHtml = `
    <p style="margin:0 auto 18px;max-width:520px;font:400 16px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;color:#374151;">
      Hi ${userName}, your account status has changed.
    </p>`;

  const rows =
    detailRow(
      "Email Address",
      `<a href="mailto:${email}" style="color:${primaryColor};text-decoration:none;">${email}</a>`
    ) +
    detailRow("Current Status", badge(nice, tone)) +
    (reason ? detailRow("Note", `${reason}`) : "");

  const bodyHtml = detailsCard("Account Update", rows);

  return BaseEmail({
    brandName,
    primaryColor,
    logoUrl,
    preheader: `${nice} for ${brandName}`,
    pillText: nice,
    heading: `Hello ${userName}!`,
    introHtml,
    bodyHtml,
    ctaText: status === "blocked" ? "Contact Support" : "Open Dashboard",
    ctaUrl: status === "blocked" ? `mailto:${supportEmail}` : dashboardUrl,
    supportEmail,
  });
};

// ---------- 2) Plan purchase confirmation ----------
export const PlanPurchaseTemplate = ({
  userName = "Investor",
  planName = "AI Growth Plan",
  amount = "1,000",
  currency = "USD",
  duration = "90 days",
  startDate, // "Aug 20, 2025"
  endDate, // "Nov 18, 2025"
  txRef = "TXN-123456",
  invoiceUrl, // optional
  dashboardUrl = "#",
  brandName = "Capital Plus",
  supportEmail = "support@Capital Plus.com",
  logoUrl,
  primaryColor = "#6675F5",
}) => {
  const introHtml = `
    <p style="margin:0 auto 18px;max-width:520px;font:400 16px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;color:#374151;">
      Hi ${userName}, your plan purchase is confirmed.
    </p>`;

  let rows = "";
  rows += detailRow("Plan", planName);
  rows += detailRow("Amount", `${currency} ${amount}`);
  if (duration) rows += detailRow("Duration", duration);
  if (startDate) rows += detailRow("Start Date", startDate);
  if (endDate) rows += detailRow("End Date", endDate);
  rows += detailRow("Reference", txRef);
  if (invoiceUrl) {
    rows += detailRow(
      "Invoice",
      `<a href="${invoiceUrl}" style="color:${primaryColor};text-decoration:none;">Download invoice</a>`
    );
  }

  const bodyHtml = detailsCard("Purchase Details", rows);

  return BaseEmail({
    brandName,
    primaryColor,
    logoUrl,
    preheader: `Plan purchase confirmed: ${planName}`,
    pillText: "Plan Purchased",
    heading: `Thank you, ${userName}!`,
    introHtml,
    bodyHtml,
    ctaText: "View Plan",
    ctaUrl: dashboardUrl,
    supportEmail,
  });
};

// ---------- 3) Transaction notifications ----------
export const TransactionTemplate = ({
  userName = "Investor",
  action = "Deposit", // Deposit | Withdrawal | Transfer | Purchase
  status = "initiated", // initiated | processing | completed | approved | failed | reversed | cancelled
  amount = "500",
  currency = "USD",
  method = "Bank Transfer",
  txRef = "TXN-ABC123",
  createdAt, // "Aug 20, 2025, 11:05 AM"
  updatedAt, // optional
  fee, // optional "2.50"
  dashboardUrl = "#",
  brandName = "Capital Plus",
  supportEmail = "support@Capital Plus.com",
  logoUrl,
  primaryColor = "#6675F5",
}) => {
  const tone =
    status === "completed" || status === "approved"
      ? "success"
      : status === "failed" || status === "cancelled"
        ? "danger"
        : status === "reversed"
          ? "warn"
          : status === "processing"
            ? "info"
            : "neutral";

  const niceStatus =
    status === "completed"
      ? "Completed"
      : status === "approved"
        ? "Approved"
        : status === "failed"
          ? "Failed"
          : status === "cancelled"
            ? "Cancelled"
            : status === "reversed"
              ? "Reversed"
              : status === "processing"
                ? "Processing"
                : "Initiated";

  const introHtml = `
    <p style="margin:0 auto 18px;max-width:520px;font:400 16px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;color:#374151;">
      Hi ${userName}, we have an update on your ${action.toLowerCase()}.
    </p>`;

  let rows = "";
  rows += detailRow("Action", action);
  rows += detailRow("Status", badge(niceStatus, tone));
  rows += detailRow("Amount", `${currency} ${amount}`);
  rows += detailRow("Method", method);
  rows += detailRow("Reference", txRef);
  if (fee) rows += detailRow("Fee", `${currency} ${fee}`);
  if (createdAt) rows += detailRow("Created", createdAt);
  if (updatedAt) rows += detailRow("Last Update", updatedAt);

  const bodyHtml = detailsCard("Transaction Details", rows);

  const ctaText =
    status === "failed"
      ? "Contact Support"
      : status === "initiated" || status === "processing"
        ? "Track in Dashboard"
        : "View Receipt";

  const ctaUrl = status === "failed" ? `mailto:${supportEmail}` : dashboardUrl;

  return BaseEmail({
    brandName,
    primaryColor,
    logoUrl,
    preheader: `${action} ${niceStatus} • ${currency} ${amount}`,
    pillText: `${action} ${niceStatus}`,
    heading: `Transaction ${niceStatus}`,
    introHtml,
    bodyHtml,
    ctaText,
    ctaUrl,
    supportEmail,
  });
};
