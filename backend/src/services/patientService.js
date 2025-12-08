const db = require("../models/index");
require("dotenv").config();
import emailService from "./emailService";
let postBookAppointment = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !data.email ||
        !data.doctorId ||
        !data.date ||
        !data.timeType ||
        !data.fullName
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter!",
        });
      } else {
        await emailService.sendSimpleEmail({
          reciverEmail: data.email,
          patientName: data.fullName,
          time: data.timeString,
          doctorName: data.doctorName,
          language: data.language,
          redirectLink: `https://www.facebook.com/tuan.pham.984553?locale=vi_VN`,
        });
        // upsert patient
        let user = await db.User.findOrCreate({
          where: { email: data.email },
          default: {
            email: data.email,
            roleId: "R3",
          },
        });

        if (user && user[0]) {
          await db.Booking.findOrCreate({
            where: { patientId: user[0].id },
            defaults: {
              statusId: "S1",
              doctorId: data.doctorId,
              patientId: user[0].id,
              date: data.date,
              timeType: data.timeType,
            },
          });
        }
      }
      resolve({
        errCode: 0,
        errMessage: "Save booking succeed",
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  postBookAppointment: postBookAppointment,
};
