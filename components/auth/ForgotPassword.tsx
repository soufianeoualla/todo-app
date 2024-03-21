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
import { ForgotPsswordSchema, LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { login } from "@/actions/login";
import { FormError } from "./FormError";
import { FormSuccess } from "./FormSuccess";
import { forgotPssword } from "@/actions/forgotPassword";

export const ForgotPassword = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof ForgotPsswordSchema>>({
    resolver: zodResolver(ForgotPsswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSend = (values: z.infer<typeof ForgotPsswordSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      forgotPssword(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSend)}
        className="space-y-8 text-left"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  type="email"
                  placeholder="mail@soufin.me"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {error && <FormError message={error} />}{" "}
        {success && <FormSuccess message={success} />}{" "}
        <Button
          disabled={isPending}
          size={"lg"}
          type="submit"
          className="w-full"
        >
          Send email
        </Button>
      </form>
    </Form>
  );
};
