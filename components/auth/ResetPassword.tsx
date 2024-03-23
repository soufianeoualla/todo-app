"use client";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { ResetSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { FormError } from "./FormError";
import { FormSuccess } from "./FormSuccess";
import { useSearchParams } from "next/navigation";
import { resetPassword } from "@/actions/resetPassword";
import { useRouter } from "next/navigation";

export const ResetPassword = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onReset = (values: z.infer<typeof ResetSchema>) => {
    startTransition(() => {
      if (!token) return setError("Missing Token");
      resetPassword(token, values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
  
        if (data?.success) {
          setTimeout(() => {
            setSuccess("Redirecting...");
            setTimeout(() => {
              router.push("/auth/login");
            }, 3000); 
          }, 2000); 
        }
      });
    });
  };
  

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onReset)}
        className="space-y-8 text-left"
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  type="password"
                  placeholder="******"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  type="password"
                  placeholder="******"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {error && <FormError message={error} />}{" "}
        {success && <FormSuccess message={success} />}
        <Button
          disabled={isPending}
          size={"lg"}
          type="submit"
          className="w-full"
        >
          Change Password
        </Button>
      </form>
    </Form>
  );
};
