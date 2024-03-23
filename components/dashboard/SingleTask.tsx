"use client";
import { TbEdit } from "react-icons/tb";
import { Button } from "../ui/button";
import { MdDelete, MdClose } from "react-icons/md";
import { useState } from "react";
import { Input } from "../ui/input";
import { editTask } from "@/actions/editTask";
import { completedTask } from "@/actions/completedTask";
import { FaCheck } from "react-icons/fa6";

interface SingleTaskProps {
  title: boolean;
  id: number;
  onDelete: (id: number) => void;
  isCompleted: boolean;
}

export const SingleTask = ({
  title,
  id,
  onDelete,
  isCompleted,
}: SingleTaskProps) => {
  const [editModal, setEditModal] = useState<boolean>(false);
  const [taskTitle, setTaskTitle] = useState<string>("");

  const onSave = () => {
    editTask(id, taskTitle);
    setEditModal(false);
    setTaskTitle("");
  };

  const onClick = () => {
    completedTask(id);
  };

  return (
    <div className="w-full">
      {!editModal && (
        <div className="flex cursor-pointer justify-between items-center gap-3 p-4 border-slate-300 border rounded-xl">
          <div className="flex items-center gap-x-2">
            <button
              onClick={onClick}
              className={`checkbox h-6 w-6 rounded-full border-primary border-2 hover:bg-primary flex justify-center items-center ${
                isCompleted && "bg-primary"
              }`}
            >
              <FaCheck className={`text-white  hover:block ${isCompleted ?'block':'hidden'}`}/>
            </button>
            <b className="flex-1">{title}</b>
          </div>

          <div className="flex items-center gap-x-1 text-2xl">
            <Button
              onClick={() => setEditModal(true)}
              variant={"outline"}
              size={"icon"}
            >
              <TbEdit className=" text-primary hover:text-primary/50 cursor-pointer h-4 w-4" />
            </Button>
            <Button
              onClick={() => onDelete(id)}
              variant={"outline"}
              size={"icon"}
            >
              <MdDelete className=" text-destructive hover:text-destructive/50 cursor-pointer h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
      {editModal && (
        <div className="flex justify-between items-center gap-3 p-4 border-slate-300 border rounded-xl">
          <Input
            type="text"
            placeholder="Your Task"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />

          <div className="flex items-center gap-2 ">
            <Button onClick={onSave} size={"sm"}>
              Save Changes
            </Button>
            <button
              onClick={() => setEditModal(false)}
              className="flex justify-center items-center w-4 h-4"
            >
              <MdClose className="text-destructive text-2xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
