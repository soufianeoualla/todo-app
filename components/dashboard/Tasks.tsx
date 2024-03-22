"use client";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { getSession } from "next-auth/react";
import { getUserTasks } from "@/data/task";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { deleteTask } from "@/actions/deleteTask";
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
 
  const onDelete = (id:number)=>{
    deleteTask(id)

  }
  return (
    <div className="w-full grid gap-y-3 py-10">
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
              <Button variant={'outline'} size={'icon'}>
                <TbEdit className=" text-primary hover:text-primary/50 cursor-pointer h-4 w-4" />
              </Button>
              <Button
              onClick={()=>onDelete(task.id)}
               variant={'outline'} size={'icon'}>
                <MdDelete className=" text-destructive hover:text-destructive/50 cursor-pointer h-4 w-4" />
              </Button>
            </div>
            
          </div>
        ))}
    </div>
  );
};
