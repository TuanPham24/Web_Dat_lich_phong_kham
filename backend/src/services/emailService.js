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
  return result;
};

module.exports = {
  sendSimpleEmail,
};
