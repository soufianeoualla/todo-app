import { CardWrapper } from "@/components/auth/CardWrapper";
import { Suspense } from "react";

const ResetPage = () => {
  return (
    <Suspense>
      <CardWrapper
        backButtonHref=""
        backButtonLabel=""
        headerLabel="Reset Password"
        type="reset"
        showSocial={false}
      ></CardWrapper>
    </Suspense>
  );
};

export default ResetPage;
