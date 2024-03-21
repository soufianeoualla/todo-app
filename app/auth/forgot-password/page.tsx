import { CardWrapper } from "@/components/auth/CardWrapper";
import React from "react";

const ForgotPasswordPage = () => {
  return (
    <CardWrapper
      headerLabel="Reset your password"
      backButtonHref="/auth/login"
      type="forgot-password"
      backButtonLabel="Back to login"
      showSocial={false}
    />
  );
};

export default ForgotPasswordPage;
