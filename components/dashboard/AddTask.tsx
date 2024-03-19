import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa6";

const AddTask = () => {
  return (
    <div className="w-full mt-10 flex items-center gap-x-4 px-3">
      <input
        type="text"
        className="w-full bg-transparent rounded-2xl h-10 px-4 py-2 border-slate-300 border outline-none focus:border-primary"
        placeholder="Write your next task"
      />
      <Button>
        <FaPlus />
      </Button>
    </div>
  );
};

export default AddTask;
