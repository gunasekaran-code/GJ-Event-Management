// app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, phone, email, eventType, message } = body;

        if (!name || !phone) {
            return NextResponse.json(
                { error: "Name and phone are required." },
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: "GJ Decoration <onboarding@resend.dev>",
            to: "gunasekaran.code@gmail.com",
            subject: `New Enquiry from ${name} – ${eventType || "General"}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 32px; background: #f8e7f6; border-radius: 16px;">
                    <h2 style="color: #4b164c; margin-bottom: 4px;">New Contact Form Submission</h2>
                    <p style="color: #bc5eff; font-size: 12px; font-weight: bold; letter-spacing: 0.1em; text-transform: uppercase;">GJ Decoration & Event Management</p>
                    <hr style="border: none; border-top: 1px solid #4b164c22; margin: 20px 0;" />

                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase; width: 120px;">Name</td>
                            <td style="padding: 8px 0; color: #4b164c; font-weight: 600;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase;">Phone</td>
                            <td style="padding: 8px 0; color: #4b164c; font-weight: 600;">${phone}</td>
                        </tr>
                        ${email ? `
                        <tr>
                            <td style="padding: 8px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase;">Email</td>
                            <td style="padding: 8px 0; color: #4b164c; font-weight: 600;">${email}</td>
                        </tr>` : ""}
                        ${eventType ? `
                        <tr>
                            <td style="padding: 8px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase;">Event Type</td>
                            <td style="padding: 8px 0;">
                                <span style="background: #4b164c; color: white; padding: 3px 12px; border-radius: 999px; font-size: 12px; font-weight: bold;">${eventType}</span>
                            </td>
                        </tr>` : ""}
                        ${message ? `
                        <tr>
                            <td style="padding: 8px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase; vertical-align: top;">Message</td>
                            <td style="padding: 8px 0; color: #4b164c; font-weight: 600; white-space: pre-wrap;">${message}</td>
                        </tr>` : ""}
                    </table>

                    <hr style="border: none; border-top: 1px solid #4b164c22; margin: 20px 0;" />
                    <p style="color: #4b164c99; font-size: 11px; text-align: center;">Sent via GJ Decoration contact form</p>
                </div>
            `,
        });

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send message. Try again later." },
            { status: 500 }
        );
    }
}