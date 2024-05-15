import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "nurfadhilahramadhann@gmail.com",
        pass: "vymu gqyf gjey gesz"
    }
})