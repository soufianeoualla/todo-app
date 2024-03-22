"use client";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { getSession } from "next-auth/react";
import { getUserTasks } from "@/data/task";
import { useEffect, useState } from "react";
export const Tasks = () => {
  const [tasks, setTasks] = useState<Array<object> | undefined | null>();

  useEffect(() => {
    const fetchTasks = async () => {
      const session = await getSession();
      if (!session) return null;
      const userId = session?.user?.id;
      try {
        const userTasks = await getUserTasks(userId as string);
        setTasks(userTasks?.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
        console.log(userTasks)
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks();
  }, [tasks]);

  return (
    <div className="w-full grid gap-y-3 mt-10">
      {tasks &&
        tasks.map((task: any) => (
          <div
            key={task.id}
            className="flex justify-between items-center p-4 border-slate-300 border rounded-xl"
          >
            <div className="flex items-center gap-x-2">
              <div className="checkbox h-6 w-6 rounded-full border-primary border-2"></div>
              <b>{task.title}</b>
            </div>

            <div className="flex items-center gap-x-1 text-2xl">
              <TbEdit className=" text-primary hover:text-primary/50 cursor-pointer" />
              <MdDelete className=" text-destructive hover:text-destructive/50 cursor-pointer" />
            </div>
          </div>
        ))}
    </div>
  );
};
