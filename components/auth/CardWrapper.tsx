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

interface CardWrapperProps {
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  type: string;
}

export const CardWrapper = ({
  headerLabel,
  backButtonHref,
  backButtonLabel,
  type,
}: CardWrapperProps) => {
  return (
    <Card className="text-center w-[400px]">
      <CardHeader className=" space-y-3">
        <CardTitle className="text-primary text-2xl">Tasking.</CardTitle>

        <CardDescription>{headerLabel} </CardDescription>
      </CardHeader>
      <CardContent className=" grid gap-2">
        {type === "login" ? <LoginForm /> : <RegisterForm />}
        <Link
          className=" text-muted-foreground hover:text-black hover:underline "
          href={backButtonHref}
        >
          {backButtonLabel}
        </Link>
      </CardContent>

      <CardFooter>
        <SocialProviders />
      </CardFooter>
    </Card>
  );
};
