// pages/api/tasks.js
'use server'
import { db } from "@/lib/db";

export const getUserTasks = async (userId: string) => {
  try {
    const userTasks = await db.user.findUnique({
      where: { id: userId },
      include:{tasks:true}
    });


    return userTasks?.tasks || [];
  } catch (error) {
    console.log(error);
    return null;
  }
};
