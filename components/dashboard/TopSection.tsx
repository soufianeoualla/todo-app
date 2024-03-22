"use client";
import { getUserTasks } from "@/data/task";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

export const TopSection = () => {
  const [tasks, setTasks] = useState<Array<any> | undefined | null>();
  useEffect(() => {
    const getTasks = async () => {
      const session = await getSession();
      const userId = session?.user?.id;
      const userTasks = await getUserTasks(userId as string);
      setTasks(userTasks);
    };
    getTasks();
  });

  const completedTasks =
    tasks && tasks?.filter((task: any) => task.isCompleted === true);

  return (
    <div className="flex justify-between items-center w-full p-8 border-2 border-slate-300 rounded-2xl mt-10">
      {tasks && (
        <>
          <div>
            <h1 className="text-2xl font-bold ">Todo Done</h1>

            <p className=" text-muted-foreground ml-1">Keep it up</p>
          </div>

          <div className="h-24 w-24 rounded-full bg-primary flex justify-center items-center text-3xl font-bold text-white">
            {completedTasks?.length}/{tasks?.length}
          </div>
        </>
      )}

      {!tasks && (
        <h1 className="text-center font-bold text-primary">
          You don&lsquo;t have any tasks Create One
        </h1>
      )}
    </div>
  );
};
