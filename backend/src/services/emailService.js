require("dotenv").config();
import nodemailer from "nodemailer";
let sendSimpleEmail = async (dataSend) => {
  // Create a test account or replace with real credentials.
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_APP,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  // Wrap in an async IIFE so we can use await.
  let info = await transporter.sendMail({
    from: process.env.EMAIL_APP,
    to: dataSend.reciverEmail,
    subject: "Thông tin đặt lịch khám bệnh",
    html: getBodyHTMLEmail(dataSend),
  });
};

let getBodyHTMLEmail = (dataSend) => {
  let result = "";
  if (dataSend.language === "vi") {
    result = `
    <h3>Xin chào ${dataSend.patientName}</h3>
    <p>Bạn nhận được email này vì đã đặt lịch khám bệnh online trên web</p>
    <p>Thông tin đặt lịch khám bệnh:</p>
    <div><b>Thời gian: ${dataSend.time}</b></div>
    <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>

    <p>Nếu các thông tin trên là đúng sự thật, vui lòng click vào đường link bên dưới để xác nhận và hoàn tất thủ tục đặt lịch khám bệnh</p>
    <a href="${dataSend.redirectLink}">Click here</a>
    <div>Xin chân thành cảm ơn.</div>
    `;
  }
  if (dataSend.language === "en") {
    result = `
    <h3>Hello ${dataSend.patientName}</h3>
    <p>You received this email because you booked an online appointment on our website</p>
    <p>Information about the appointment is as follows:</p>
    <div><b>Time: ${dataSend.time}</b></div>
    <div><b>Doctor: ${dataSend.doctorName}</b></div>

    <p>If the information above is true, please click on the link below to confirm and complete the booking process</p>
    <a href="${dataSend.redirectLink}">Click here</a>
    <div>Thank you very much.</div>
    `;
  }
  return result;
};
let getBodyHTMLEmailRemedy = (dataSend) => {
  let result = "";
  if (dataSend.language === "vi") {
    result = `
    <h3>Xin chào ${dataSend.patientName}</h3>
    <p>Bạn nhận được email này vì đã đặt lịch khám bệnh online trên web</p>
    <p>Thông tin đơn thuốc/hóa đơn được gửi trong file đính kèm.</p>
    
    <div>Xin chân thành cảm ơn.</div>
    `;
  }
  if (dataSend.language === "en") {
    result = `
    <h3>Hello ${dataSend.patientName}</h3>
    <p>You received this email because you booked an online appointment on our website</p>
    <p>Information about the prescription/invoice is attached in the file.</p>

    <div>Thank you very much.</div>
    `;
  }
  return result;
};
let sendAttachment = async (dataSend) => {
  // Create a test account or replace with real credentials.
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_APP,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  // Wrap in an async IIFE so we can use await.
  let info = await transporter.sendMail({
    from: process.env.EMAIL_APP,
    to: dataSend.email,
    subject: "Kết quả đặt lịch khám bệnh",
    html: getBodyHTMLEmailRemedy(dataSend),
    attachments: [
      {
        filename: `remedy-${dataSend.patientId}-${new Date().getTime()}.png`,
        content: dataSend.imgBase64.split("base64,")[1],
        encoding: "base64",
      },
    ],
  });
};
module.exports = {
  sendSimpleEmail,
  sendAttachment,
};
