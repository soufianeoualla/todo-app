"use server";

import { db } from "@/lib/db";

export const addTask = async (task: string,userId:string|undefined) => {
  await db.task.create({
    data:{
        userId:userId,
        title:task,
    }
  })
};
