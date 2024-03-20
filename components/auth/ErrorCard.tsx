import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

interface ErrorCardProps {
  headerLabel: string;
  backButtonHref: string;
  backButtonLabel: string;
}

const ErrorCard = ({
  headerLabel,
  backButtonHref,
  backButtonLabel,
}: ErrorCardProps) => {
  return (
    <Card className="text-center w-[400px]">
      <CardHeader className=" space-y-3">
        <CardTitle className="text-primary text-2xl">Tasking.</CardTitle>

        <CardDescription>{headerLabel} </CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-center items-center">
        <Link className=" hover:underline " href={backButtonHref}>
          {backButtonLabel}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ErrorCard;
