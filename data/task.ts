// pages/api/tasks.js
'use server'
import { auth } from "@/auth";
import { db } from "@/lib/db";

export const getUserTasks = async () => {
  const session = await auth()
   const userId = session?.user?.id
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
