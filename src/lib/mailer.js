import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "mail.teqnoor.info",
  port: 465,
  secure: true,
  auth: {
    user: "megaplus@teqnoor.info",
    pass: "123Admin@123",
  },
  tls: {
    rejectUnauthorized: false 
  }
});

export async function sendEmails(data) {
  const { first_name, last_name, email, phone_number, service_interested, business_name, message, bill_url } = data;
  const full_name = `${first_name} ${last_name}`;
  
  const senderEmail = `"Eazy Switch Support" <megaplus@teqnoor.info>`;
  const adminRecipient = "usmanadmin@yopmail.com"; 

  // --- Common Styles (Wahi purane) ---
  const mainContainer = "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f9fafb; padding: 40px 10px;";
  const cardStyle = "max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #e5e7eb;";
  const headerStyle = "background-color: #1a4d4d; padding: 30px; text-align: center; color: #ffffff;";
  const bodyStyle = "padding: 30px; color: #374151;";
  const labelStyle = "font-size: 11px; font-weight: 700; text-transform: uppercase; color: #6b7280; letter-spacing: 0.05em; margin-bottom: 4px; display: block;";
  const valueStyle = "font-size: 15px; font-weight: 500; color: #111827; margin-bottom: 20px;";
  const btnStyle = "display: inline-block; padding: 12px 24px; border-radius: 8px; font-weight: 600; text-decoration: none; font-size: 14px; margin-right: 10px; margin-top: 10px;";

  // --- 1. Admin Email ---
  const adminMail = {
    from: senderEmail,
    to: adminRecipient,
    subject: `🚀 New Lead: ${full_name} (${business_name})`,
    // Yahan hum attachment add kar rahe hain agar bill_url maujood hai
    attachments: bill_url ? [
      {
        filename: 'utility-bill.png',
        path: bill_url,
        cid: 'billimage' // Ye ID niche img tag mein use hogi
      }
    ] : [],
    html: `
      <div style="${mainContainer}">
        <div style="${cardStyle}">
          <div style="${headerStyle}">
            <h1 style="margin:0; font-size: 24px;">New Business Lead</h1>
            <p style="margin: 5px 0 0; opacity: 0.8;">Priority Inquiry from Eazy Switch</p>
          </div>
          <div style="${bodyStyle}">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="50%">
                  <span style="${labelStyle}">Client Name</span>
                  <div style="${valueStyle}">${full_name}</div>
                </td>
                <td width="50%">
                  <span style="${labelStyle}">Business Name</span>
                  <div style="${valueStyle}">${business_name || 'N/A'}</div>
                </td>
              </tr>
              <tr>
                <td width="50%">
                  <span style="${labelStyle}">Service Requested</span>
                  <div style="${valueStyle}">${service_interested}</div>
                </td>
                <td width="50%">
                  <span style="${labelStyle}">Phone Number</span>
                  <div style="${valueStyle}">${phone_number}</div>
                </td>
              </tr>
            </table>

            <span style="${labelStyle}">Message / Situation</span>
            <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; font-style: italic; color: #4b5563; margin-bottom: 25px;">
              "${message || 'No message provided'}"
            </div>

            ${bill_url ? `
              <span style="${labelStyle}">Attached Bill / Image</span>
              <div style="margin-bottom: 25px;">
                <img src="cid:billimage" alt="Utility Bill" style="width: 100%; max-width: 350px; border-radius: 12px; border: 1px solid #e5e7eb; display: block;" />
                <br/>
                <a href="${bill_url}" target="_blank" style="font-size: 12px; color: #1a4d4d; font-weight: bold; text-decoration: underline;">Open Full Resolution Image →</a>
              </div>
            ` : ''}

            <div style="border-top: 1px solid #e5e7eb; margin-top: 20px; padding-top: 20px;">
              <span style="${labelStyle}">Quick Actions</span>
              <a href="https://wa.me/${phone_number.replace(/\D/g, "")}" style="${btnStyle} background-color: #25D366; color: white;">WhatsApp Client</a>
              <a href="mailto:${email}" style="${btnStyle} background-color: #6366f1; color: white;">Reply via Email</a>
            </div>
          </div>
        </div>
      </div>`,
  };

  // --- 2. User Email ---
  const userMail = {
    from: senderEmail,
    to: email,
    subject: `We've Received Your Inquiry - Eazy Switch Limited`,
    html: `... (Wahi purana code user mail ka) ...`,
  };

  return Promise.all([
    transporter.sendMail(adminMail),
    transporter.sendMail(userMail)
  ]);
}