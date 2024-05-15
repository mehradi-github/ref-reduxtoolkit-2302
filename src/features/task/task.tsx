import { useAppDispatch } from "../../app/hooks";
import { removeTask } from "./task-slice";

interface TaskProps {
  task: Task;
}
const Task = ({ task }: TaskProps) => {
  const dispatch = useAppDispatch();
  return (
    <article className="task">
      <header className="task-header">
        <h2 className="task-title">{task.title}</h2>
        <button
          className="destructive small"
          onClick={() => {
            dispatch(removeTask(task.id));
          }}
        >
          Remove
        </button>
      </header>
    </article>
  );
};
export default Task;
