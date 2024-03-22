"use server";

import { db } from "@/lib/db";

export const editTask = async (id:number,taskTitle:string) => {
  await db.task.update({
   where:{id:id},
   data:{title:taskTitle}
  })
};
