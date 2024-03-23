'use client'
import { getUserTasks } from "@/data/task";
import { SingleTask } from "./SingleTask";
import Loading from "@/components/loading";
import { useEffect, useState } from "react";
export const Tasks =  () => {
  const [tasks, setTasks] = useState<Array<any> | undefined | null>();
  useEffect(()=>{
    const getTasks =async ()=>{
      const userTasks = await getUserTasks()
      setTasks(
        userTasks?.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
      );
    }
    getTasks()
  },[tasks])
  
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
            isCompleted={task.isCompleted}
          />
        ))}
    </div>
  );
};
