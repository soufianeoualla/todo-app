import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "./LoginForm";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { SocialProviders } from "./SocialProviders";
import Link from "next/link";
import { RegisterForm } from "./RegisterForm";
import { ResetPassword } from "./ResetPassword";
import { ForgotPassword } from "./ForgotPassword";

interface CardWrapperProps {
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  type: string;
  showSocial: boolean;
}

export const CardWrapper = ({
  headerLabel,
  backButtonHref,
  backButtonLabel,
  type,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="text-center w-[400px] sm:w-[90%]">
      <CardHeader className=" space-y-3">
        <CardTitle className="text-primary text-2xl">Tasking.</CardTitle>

        <CardDescription>{headerLabel} </CardDescription>
      </CardHeader>
      <CardContent className=" grid gap-2">
        {type === "login" ? (
          <LoginForm />
        ) : type === "register" ? (
          <RegisterForm />
        ) : type === "reset" ? (
          <ResetPassword />
        ) : (
          <ForgotPassword />
        )}
        <Link
          className=" text-muted-foreground hover:text-black hover:underline "
          href={backButtonHref}
        >
          {backButtonLabel}
        </Link>
      </CardContent>

      {showSocial && (
        <CardFooter>
          <SocialProviders />
        </CardFooter>
      )}
    </Card>
  );
};
