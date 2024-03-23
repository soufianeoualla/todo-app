import { SingleTask } from "./SingleTask";
interface TasksProps{
  tasks: Array<object> | undefined 
}
export const Tasks = ({tasks}:TasksProps) => {
  
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
