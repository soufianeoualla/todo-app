"use client";
import AddTask from "@/components/dashboard/AddTask";
import { Tasks } from "@/components/dashboard/Tasks";
import { TopSection } from "@/components/dashboard/TopSection";
import Loading from "@/components/loading";
import { getUserTasks } from "@/data/task";
import { useEffect, useState } from "react";

const DashboardWrapper = () => {
  const [tasks, setTasks] = useState<Array<object> | undefined | null>();

  const getTasks = async () => {
    const userTasks = await getUserTasks();
    setTasks(userTasks);
  };

  useEffect(() => {
    getTasks();
  }, [tasks]);

  const isCompleted = tasks?.filter((item: any) => item.isCompleted === true);
  if (!tasks) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loading />;
      </div>
    );
  }

  return (
    <>
      {
        <div className="flex justify-center flex-col items-center w-[400px] sm:w-[90%] m-auto">
          <TopSection
            tasksLength={tasks?.length}
            isCompletedLength={isCompleted?.length}
          />
          <AddTask />
          <Tasks tasks={tasks} />
        </div>
      }
    </>
  );
};

export default DashboardWrapper;
