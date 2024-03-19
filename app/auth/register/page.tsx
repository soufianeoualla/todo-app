import { CardWrapper } from "@/components/auth/CardWrapper";
import React from "react";

const RegisterPage = () => {
  return (
    <CardWrapper
      headerLabel="Create an account"
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account? Log In"
      type='register'
    />
  );
};

export default RegisterPage;
