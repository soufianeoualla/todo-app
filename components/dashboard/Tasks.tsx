import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { db } from "@/lib/db";
export const Tasks = () => {
  return (
    <div className="w-full grid gap-y-3 mt-10">

      <div className="flex justify-between items-center p-4 border-slate-300 border rounded-xl">
        <div className="flex items-center gap-x-2">
          <div className="checkbox h-6 w-6 rounded-full border-primary border-2"></div>
          <b>Task 1</b>
        </div>

        <div className="flex items-center gap-x-1 text-2xl">
          <TbEdit className=" text-primary hover:text-primary/50 cursor-pointer"/>
          <MdDelete className=" text-destructive hover:text-destructive/50 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
