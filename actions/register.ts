"use server";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcryptjs";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }

  const { password, email, fullName } = validateFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });
  if (existingUser) return { error: "Email already in use" };
  await db.user.create({
    data: {
      email,
      fullName,
      password: hashedPassword,
    },
  });
  return {success:'User created'}
};
