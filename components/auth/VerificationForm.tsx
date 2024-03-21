"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { PulseLoader } from "react-spinners";
import { FormSuccess } from "./FormSuccess";
import { FormError } from "./FormError";
import { useRouter, useSearchParams } from "next/navigation";
import { newVerification } from "@/actions/newVerification";

interface VerificationFormProps {
  headerLabel: string;
}

export const VerificationForm = ({ headerLabel }: VerificationFormProps) => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const router = useRouter();

  const onSubmit = useCallback(() => {
    if (!token) return setError('Missing Token');
    newVerification(token).then((data) => {
      setError(data.error);
      setSuccess(data.success);
    });

    setTimeout(() => {
      if (success) {
        router.push("/auth/login");
      }
    }, 5000);
  }, [token, success, router]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <Card className="text-center w-[400px]">
      <CardHeader className=" space-y-3">
        <CardTitle className="text-primary text-2xl">Tasking.</CardTitle>

        <CardDescription>{headerLabel} </CardDescription>
      </CardHeader>
      <CardContent>
        {!error && !success && <PulseLoader color="hsl(262.1 83.3% 57.8%)" />}
        {success && <FormSuccess message={success} />}
        {success &&  <p>Redirecting...</p> }
        {error && <FormError message={error} />}{" "}
      </CardContent>
    </Card>
  );
};
