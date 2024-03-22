"use server";

import { db } from "@/lib/db";

export const deleteTask = async (id: number | undefined) => {
  await db.task.delete({
    where: { id },
  });
};
