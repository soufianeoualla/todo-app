"use client";

import { getSession } from "next-auth/react";
import { getUserTasks } from "@/data/task";
import { useEffect, useState } from "react";
import { deleteTask } from "@/actions/deleteTask";
import { SingleTask } from "./SingleTask";
import Loading from "@/components/loading";
export const Tasks = () => {
  const [tasks, setTasks] = useState<Array<object> | undefined | null>();
  useEffect(() => {
    const fetchTasks = async () => {
      const session = await getSession();
      if (!session) return null;
      const userId = session?.user?.id;
      try {
        const userTasks = await getUserTasks(userId as string);
        setTasks(
          userTasks?.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
        );
        console.log(userTasks);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks();
  }, [tasks]);

  const onDelete = (id: number) => {
    deleteTask(id);
  };
  if(!tasks){
    return <Loading />
  }
  return (
    <div className="w-full grid gap-y-3 py-10">
      {tasks &&
        tasks.map((task: any) => (
          <SingleTask
            key={task.id}
            id={task.id}
            title={task.title}
            onDelete={onDelete}
            isCompleted={task.isCompleted}
          />
        ))}
    </div>
  );
};
