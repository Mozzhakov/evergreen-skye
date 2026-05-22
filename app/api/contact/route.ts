import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,

    auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
    },
});

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const {
            name,
            company,
            email,
            phone,
            category,
            message
        } = body;

        await transporter.sendMail({
            from: process.env.ZOHO_EMAIL,

            to: process.env.ZOHO_EMAIL,

            replyTo: email,

            subject: `New message from ${name}`,

            html: `
        <h2>New Contact Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || "-"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Category:</strong> ${category || "-"}</p>

        <hr/>

        <p>${message}</p>
      `,
        });

        return NextResponse.json({
            success: true
        });

    } catch (error) {

        console.log(error);

        return NextResponse.json(
            {
                success: false
            },
            {
                status: 500
            }
        );
    }
}