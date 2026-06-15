"use server";

import { contactSchema } from "@/schema/contact.schema";
import { resend } from "@/lib/resend";
import { supabase } from "@/lib/supabase/server";

type ContactActionResult = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  data: unknown,
): Promise<ContactActionResult> {
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please check the form and try again.",
    };
  }

  const { name, email, message, website } = parsed.data;

  // Honeypot
  if (website?.trim()) {
    return {
      success: true,
      message: "Message sent successfully.",
    };
  }

  const { error } = await supabase.from("contact_messages").insert({
    name,
    email,
    message,
  });

  if (error) {
    console.error("Supabase insert error:", error);

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }

  // Send notification email
  try {
    const { data, error: emailError } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["vivekkmrpaswan@gmail.com"],
      subject: `New Portfolio Contact from ${name}`,
      html: `
    <h2>New Portfolio Contact</h2>

    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>

    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
    });
    if (emailError) {
      console.error("Email notification failed:", emailError);
    }
    console.log("Email sent:", data);
  } catch (error) {
    console.error("Email notification failed:", error);
  }

  return {
    success: true,
    message: "Message sent successfully.",
  };
}
