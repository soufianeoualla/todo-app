import { CardWrapper } from "@/components/auth/CardWrapper";
import { Card } from "@/components/ui/card";

const ResetPage = () => {
  return (
    <CardWrapper
      backButtonHref=""
      backButtonLabel=""
      headerLabel="Reset Password"
      type="reset"
      showSocial={false}
    ></CardWrapper>
  );
};

export default ResetPage;
