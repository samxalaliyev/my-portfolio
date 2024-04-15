import { render } from "@react-email/render";
import WelcomeEmail from "@/emails";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, res: Response) {
  const { userFirstname, userEmail, userMessage } = await request.json();

  const { data, error } = await resend.emails.send({
    from: `${userFirstname} <onboarding@resend.dev>`,
    to: "samxalaliyev19@gmail.com",
    subject: "Thank you",
    html: render(WelcomeEmail({ userFirstname, userEmail, userMessage })),
  });

  if (error) {
    return Response.json(error);
  }

  return Response.json({ message: "An email has been sent" });
}
