// app/api/booking/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { error: "Email service is not configured." },
                { status: 500 }
            );
        }

        const body = await req.json();
        const {
            fullName,
            phone,
            venue,
            eventDate,
            startTime,
            duration,
            eventType,
            guestCount,
            productionServices,
            equipmentServices,
            selectedPackages,
        } = body;

        if (!fullName || !phone) {
            return NextResponse.json(
                { error: "Name and phone are required." },
                { status: 400 }
            );
        }

        const emailRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: "GJ Decoration <onboarding@resend.dev>",
                // to: "gunasekaran.code@gmail.com",
                to: "jebastin396@gmail.com",
                subject: `New Booking Request – ${fullName} | ${eventType || "Event"}`,
                html: `
                <div style="font-family: sans-serif; max-width: 620px; margin: auto; padding: 32px; background: #f8e7f6; border-radius: 16px;">
                    <h2 style="color: #4b164c; margin-bottom: 4px;">New Booking Request</h2>
                    <p style="color: #bc5eff; font-size: 12px; font-weight: bold; letter-spacing: 0.1em; text-transform: uppercase; margin-top: 0;">GJ Decoration & Event Management</p>

                    <hr style="border: none; border-top: 1px solid #4b164c22; margin: 20px 0;" />

                    <!-- Contact Details -->
                    <h3 style="color: #4b164c; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 12px;">Contact Details</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 7px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase; width: 160px;">Name</td>
                            <td style="padding: 7px 0; color: #4b164c; font-weight: 600;">${fullName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 7px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase;">Phone</td>
                            <td style="padding: 7px 0; color: #4b164c; font-weight: 600;">${phone}</td>
                        </tr>
                        ${venue ? `
                        <tr>
                            <td style="padding: 7px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase;">Venue</td>
                            <td style="padding: 7px 0; color: #4b164c; font-weight: 600;">${venue}</td>
                        </tr>` : ""}
                    </table>

                    <hr style="border: none; border-top: 1px solid #4b164c22; margin: 20px 0;" />

                    <!-- Event Details -->
                    <h3 style="color: #4b164c; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 12px;">Event Details</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        ${eventDate ? `
                        <tr>
                            <td style="padding: 7px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase; width: 160px;">Date</td>
                            <td style="padding: 7px 0; color: #4b164c; font-weight: 600;">${eventDate}</td>
                        </tr>` : ""}
                        ${startTime ? `
                        <tr>
                            <td style="padding: 7px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase;">Start Time</td>
                            <td style="padding: 7px 0; color: #4b164c; font-weight: 600;">${startTime}</td>
                        </tr>` : ""}
                        ${duration ? `
                        <tr>
                            <td style="padding: 7px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase;">Duration</td>
                            <td style="padding: 7px 0; color: #4b164c; font-weight: 600;">${duration}</td>
                        </tr>` : ""}
                        ${eventType ? `
                        <tr>
                            <td style="padding: 7px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase;">Event Type</td>
                            <td style="padding: 7px 0;">
                                <span style="background: #4b164c; color: white; padding: 3px 12px; border-radius: 999px; font-size: 12px; font-weight: bold;">${eventType}</span>
                            </td>
                        </tr>` : ""}
                        ${guestCount ? `
                        <tr>
                            <td style="padding: 7px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase;">Guest Count</td>
                            <td style="padding: 7px 0; color: #4b164c; font-weight: 600;">${guestCount}</td>
                        </tr>` : ""}
                    </table>

                    <hr style="border: none; border-top: 1px solid #4b164c22; margin: 20px 0;" />

                    <!-- Services -->
                    <h3 style="color: #4b164c; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 12px;">Services Requested</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        ${productionServices ? `
                        <tr>
                            <td style="padding: 7px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase; width: 160px;">Production</td>
                            <td style="padding: 7px 0; color: #4b164c; font-weight: 600;">${productionServices}</td>
                        </tr>` : ""}
                        ${equipmentServices ? `
                        <tr>
                            <td style="padding: 7px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase;">Equipment</td>
                            <td style="padding: 7px 0; color: #4b164c; font-weight: 600;">${equipmentServices}</td>
                        </tr>` : ""}
                        ${selectedPackages ? `
                        <tr>
                            <td style="padding: 7px 0; color: #4b164c99; font-size: 12px; font-weight: bold; text-transform: uppercase; vertical-align: top;">From Pricing</td>
                            <td style="padding: 7px 0; color: #4b164c; font-weight: 600;">${selectedPackages}</td>
                        </tr>` : ""}
                    </table>

                    <hr style="border: none; border-top: 1px solid #4b164c22; margin: 20px 0;" />
                    <p style="color: #4b164c99; font-size: 11px; text-align: center; margin: 0;">Sent via GJ Decoration booking form</p>
                </div>
            `,
            }),
        });

        if (!emailRes.ok) {
            const details = await emailRes.text();
            console.error("Resend booking email error:", details);
            return NextResponse.json(
                { error: "Failed to send booking email." },
                { status: 502 }
            );
        }

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error("Booking form error:", error);
        return NextResponse.json(
            { error: "Failed to submit booking. Try again later." },
            { status: 500 }
        );
    }
}
