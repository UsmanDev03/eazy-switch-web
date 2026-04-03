import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: "info@tmdriveschool.co.uk",
    pass: "Sylhet123!@#",
  },
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: false
  }
});

export async function sendEmails(data) {
  const { full_name, email, mobile_number, area, message } = data;
  const senderEmail = `"TM Driving School" <info@tmdriveschool.co.uk>`;

  // Common Styles
  const mainStyle = "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;";
  const headerStyle = "background-color: #000000; color: #ffffff; padding: 30px; text-align: center;";
  const contentStyle = "padding: 30px; background-color: #ffffff;";
  const footerStyle = "background-color: #f9f9f9; padding: 20px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #eeeeee;";
  const labelStyle = "font-weight: bold; color: #000; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; margin-bottom: 5px; display: block;";
  const infoBox = "margin-bottom: 20px; border-bottom: 1px solid #f0f0f0; padding-bottom: 10px;";

  // --- 1. Admin Notification Email ---
const adminMail = {
    from: senderEmail,
    to: "info@tmdriveschool.co.uk",
    subject: `🆕 NEW ENQUIRY: ${full_name}`,
    html: `
      <div style="${mainStyle}">
        <div style="${headerStyle}">
          <h1 style="margin: 0; font-size: 24px; letter-spacing: 2px;">NEW LEAD</h1>
        </div>
        <div style="${contentStyle}">
          <div style="${infoBox}">
            <span style="${labelStyle}">Student Name</span>
            <div style="font-size: 16px;">${full_name}</div>
          </div>

          <div style="${infoBox}">
            <span style="${labelStyle}">Email Address</span>
            <div style="font-size: 16px; color: #2563eb;">${email || 'Not provided'}</div>
          </div>

          <div style="${infoBox}">
            <span style="${labelStyle}">Contact Number</span>
            <div style="font-size: 16px;">${mobile_number}</div>
          </div>
          <div style="${infoBox}">
            <span style="${labelStyle}">Preferred Area</span>
            <div style="font-size: 16px;">${area}</div>
          </div>
          <div style="${infoBox}">
            <span style="${labelStyle}">Message/Notes</span>
            <div style="font-size: 15px; font-style: italic;">"${message || 'No message provided'}"</div>
          </div>

          <div style="margin-top: 20px;">
            <a href="tel:${mobile_number}" style="display: inline-block; background: #000; color: #fff; padding: 12px 25px; text-decoration: none; border-radius: 4px; font-weight: bold; margin-right: 10px;">CALL NOW</a>
            
            ${email ? `
            <a href="mailto:${email}" style="display: inline-block; background: #2563eb; color: #fff; padding: 12px 25px; text-decoration: none; border-radius: 4px; font-weight: bold;">REPLY VIA EMAIL</a>
            ` : ''}
          </div>
        </div>
        <div style="${footerStyle}">
          TM Driving School Admin Dashboard • Generated at ${new Date().toLocaleString()}
        </div>
      </div>`,
  };
  // --- 2. User Confirmation Email ---
  const userMail = {
    from: senderEmail,
    to: email,
    subject: `Booking Confirmed - TM Driving School`,
    html: `
      <div style="${mainStyle}">
        <div style="${headerStyle}">
          <h1 style="margin: 0; font-size: 24px; letter-spacing: 2px;">TM DRIVING SCHOOL</h1>
        </div>
        <div style="${contentStyle}">
          <h2 style="margin-top: 0; color: #000;">Hello ${full_name},</h2>
          <p style="font-size: 16px; color: #444;">Thank you for choosing <strong>TM Driving School</strong>. We have received your booking request for <strong>${area}</strong>.</p>
          <div style="background: #f9f9f9; border-left: 4px solid #000; padding: 15px; margin: 25px 0;">
            <p style="margin: 0; font-size: 14px;"><strong>Next Step:</strong> One of our instructors will call you on <strong>${mobile_number}</strong> within the next 24 hours to finalize your schedule.</p>
          </div>
          <p style="font-size: 15px;">We look forward to helping you get on the road safely!</p>
          <p style="margin-top: 30px; font-size: 14px;">Best Regards,<br><strong>Management Team</strong></p>
        </div>
        <div style="${footerStyle}">
          &copy; ${new Date().getFullYear()} TM Driving School. All rights reserved.<br>
          Safe Driving | Professional Instructors | Quality Service
        </div>
      </div>`,
  };

  return Promise.all([
    transporter.sendMail(adminMail),
    transporter.sendMail(userMail)
  ]);
}