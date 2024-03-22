"use server";

import { db } from "@/lib/db";

export const completedTask = async (id: number) => {
  const task = await db.task.findUnique({
    where: { id: id },
  });

  if (!task) {
    return;
  }

  const newIsCompleted = !task.isCompleted;

  await db.task.update({
    where: { id: id },
    data: { isCompleted: newIsCompleted },
  });
};
