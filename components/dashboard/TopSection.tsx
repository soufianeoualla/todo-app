"use client";
import { getUserTasks } from "@/data/task";
import { useEffect, useState } from "react";
import Loading from "../loading";

export const TopSection = () => {
  const [tasks, setTasks] = useState<Array<any> | undefined | null>();
  useEffect(() => {
    const getTasks = async () => {
      const userTasks = await getUserTasks();
      setTasks(userTasks);
    };
    getTasks();
  }, [tasks]);

  const completedTasks =
    tasks && tasks?.filter((task: any) => task.isCompleted === true);
  if (!tasks) {
    return <Loading />;
  }

  return (
    <div className="flex justify-between items-center w-full p-8 border-2 border-slate-300 rounded-2xl mt-10">
      {tasks && tasks.length > 0 && (
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

      {tasks && tasks.length === 0 && (
        <h1 className="text-center font-bold text-primary">
          You don&lsquo;t have any tasks Create One
        </h1>
      )}
    </div>
  );
};
