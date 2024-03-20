import ErrorCard from "@/components/auth/ErrorCard";
const ErrorPage = () => {
  return (
    <ErrorCard
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
      headerLabel="Something Went wrong!"
    />
  );
};

export default ErrorPage;
