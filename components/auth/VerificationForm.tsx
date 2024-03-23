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
import Loading from "../loading";

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
    if (!token) return setError("Missing Token");
    newVerification(token).then((data) => {
      setError(data?.error);
      setSuccess(data.success);
      if (data.success) {
        setTimeout(() => {
          setSuccess("Redirecting...");
          setTimeout(() => {
            router.push("/auth/login");
          }, 3000);
        }, 2000);
      }
    });
  }, [token, router]);

  useEffect(() => {
    if(success) return
    onSubmit();
  }, [onSubmit,success]);

  return (
    <Card className="text-center w-[400px]">
      <CardHeader className=" space-y-3">
        <CardTitle className="text-primary text-2xl">Tasking.</CardTitle>

        <CardDescription>{headerLabel} </CardDescription>
      </CardHeader>
      <CardContent>
        {!error && !success && <Loading />}
        {success && <FormSuccess message={success} />}
        {error && <FormError message={error} />}{" "}
      </CardContent>
    </Card>
  );
};
