import axios from "axios";
import nodemailer from "nodemailer";

export const queryResolvers = {
	sendEmail: async (_: any, input: any) => {
		try {
			console.log(input);

			axios
				.post(`https://bastartstudios.dk:4444/discord`, {
					data: { name:input.name, email:input.email, number:input.number, message:input.message, time: input.time },
				})

				.catch((err) => console.log(err));

			const transporter = nodemailer.createTransport({
				service: "gmail",
				auth: {
					user: "bastartstudios@gmail.com",
					pass: "ezzsiqizmgaacjri",
				},
			});

			const mailOptions = {
				from: "flexifix@gmail.com",
				to: input.email,
				subject: "FlexiFix Invoice",
				text: "Dear customer, thank you for using FlexiFix Services. \nYou can see the invoice in the attachment. \nFlexifix",
			};

			// transporter.sendMail(mailOptions, (error, info) => {
			// 	if (error) {
			// 		console.log(error);
			// 	} else {
			// 		console.log(`Email sent: ${info.response}`);
			// 	}
			// });

			return "email sent";
		} catch (err) {
			throw new Error(err);
		}
	},
};
