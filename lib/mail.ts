import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmationLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email",
    html: ` <div>
    <h1>
      Welcome, this is your Verification Link,
      <a href=${confirmationLink}> click here</a>
    </h1>
  </div>`,
  });
};


export const sendPasswordResetEmail = async (email: string, token: string) => {
  const confirmationLink = `http://localhost:3000/auth/reset?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset your password",
    html: ` <div>
    <h1>
      Welcome, this is your Reset Password Link,
      <a href=${confirmationLink}> click here</a>
    </h1>
  </div>`,
  });
};