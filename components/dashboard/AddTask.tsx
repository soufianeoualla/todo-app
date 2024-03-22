"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa6";
import { addTask } from "@/actions/addTask";
import { getSession } from "next-auth/react";
import { FormError } from "../auth/FormError";
import { Input } from "../ui/input";

const AddTask = () => {
  const [task, setTask] = useState<string>("");
  const [error, setError] = useState<string | undefined>("");

  const onCreate = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const session = await getSession();
    if (!session) return setError("User ot authenticated");
    const userId = session?.user?.id;
    if (task.trim() === "") return setError("Task can't be empty");
    addTask(task, userId as string);
    setTask('')
  };



  return (
    <>
    <form
      onSubmit={onCreate}
      className="w-full mt-10 flex items-center gap-x-4 px-3 mb-5"
    >
      <Input
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
     {error && <FormError message={error} />}
      </>
  );
};

export default AddTask;
