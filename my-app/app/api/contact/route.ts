import { Resend } from "resend";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend("re_9SAX868L_7bfgE1yS9aee55S3prQFNWuF");
  
  try {
    const { name, email, subject, message } = await req.json();
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "samiabba110@gmail.com",
      subject: subject,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
    return NextResponse.json({ message: "Email sent!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
