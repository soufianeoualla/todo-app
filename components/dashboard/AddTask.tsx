"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa6";
import { addTask } from "@/actions/addTask";
import { auth } from "@/auth";

const AddTask = () => {
  const [task, setTask] = useState<string>("");
  const [error, setError] = useState<string | undefined>("");

  const onCreate = async () => {
    const session = await auth()
    const userId =session?.user?.email
    console.log(userId)
    if (task.trim() === "") return setError("Task can't be empty");
    addTask(task,userId);
  };
  return (
      <form action={onCreate} className="w-full mt-10 flex items-center gap-x-4 px-3">
      <input
        onChange={(e) => setTask(e.target.value)}
        value={task}
        type="text"
        className="w-full bg-transparent rounded-2xl h-10 px-4 py-2 border-slate-300 border outline-none focus:border-primary"
        placeholder="Write your next task"
      />
      
      <Button type="submit">
        <FaPlus />
      </Button>
      </form>
  );
};

export default AddTask;
