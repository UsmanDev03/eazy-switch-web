import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "mail.teqnoor.info",
  port: 465,
  secure: true, // SSL (port 465) ke liye true lazmi hai
  auth: {
    user: "megaplus@teqnoor.info",
    pass: "123Admin@123",
  },
  tls: {
    rejectUnauthorized: false // Server certificate errors se bachne ke liye
  }
});

export async function sendEmails(data) {
  const { first_name, last_name, email, phone_number, service_interested, message } = data;
  const full_name = `${first_name} ${last_name}`;
  
  // Official address aur name jo aapne bataya
  const senderEmail = `"MegaPlus" <megaplus@teqnoor.info>`;
  const adminRecipient = "usmanadmin@yopmail.com"; 

  const mainStyle = "font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1a4d4d; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden;";
  const headerStyle = "background-color: #1a4d4d; color: #ffffff; padding: 25px; text-align: center;";
  const contentStyle = "padding: 30px; background-color: #ffffff;";
  const labelStyle = "font-weight: bold; color: #1a4d4d; text-transform: uppercase; font-size: 11px; margin-bottom: 4px; display: block;";
  const infoBox = "margin-bottom: 15px; border-bottom: 1px solid #f5f5f5; padding-bottom: 8px;";

  // --- 1. Admin Email ---
  const adminMail = {
    from: senderEmail,
    to: adminRecipient,
    subject: `🚀 MegaPlus Lead: ${full_name}`,
    html: `
      <div style="${mainStyle}">
        <div style="${headerStyle}"><h2 style="margin:0;">New Utility Inquiry</h2></div>
        <div style="${contentStyle}">
          <div style="${infoBox}"><span style="${labelStyle}">Client Name</span>${full_name}</div>
          <div style="${infoBox}"><span style="${labelStyle}">Service</span>${service_interested}</div>
          <div style="${infoBox}"><span style="${labelStyle}">Contact</span>${phone_number} / ${email}</div>
          <div style="${infoBox}"><span style="${labelStyle}">Message</span>${message || 'No message'}</div>
        </div>
      </div>`,
  };

  // --- 2. User Email ---
  const userMail = {
    from: senderEmail,
    to: email,
    subject: `Thank you for contacting MegaPlus`,
    html: `
      <div style="${mainStyle}">
        <div style="${headerStyle}"><h2 style="margin:0;">MegaPlus</h2></div>
        <div style="${contentStyle}">
          <h3>Hello ${first_name},</h3>
          <p>We have received your inquiry for <strong>${service_interested}</strong>. Our team will get back to you shortly.</p>
          <p>Best Regards,<br><strong>MegaPlus Team</strong></p>
        </div>
      </div>`,
  };

  return Promise.all([
    transporter.sendMail(adminMail),
    transporter.sendMail(userMail)
  ]);
}