import { CardWrapper } from "@/components/auth/CardWrapper";

const LoginPage = () => {
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonHref="/auth/register"
      backButtonLabel="Don't have an account? Create one"
      type="login"
      showSocial
    />
  );
};

export default LoginPage;
