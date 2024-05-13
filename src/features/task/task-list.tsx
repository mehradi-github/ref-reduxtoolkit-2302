import { useAppSelector } from "../../app/hooks";
import Task from "./task";

const TaskList = () => {
  const tasks = useAppSelector((state) => state.tasks.entities);

  return (
    <section className="task-list">
      {tasks && tasks.map((t) => <Task key={t.id} task={t} />)}
    </section>
  );
};
export default TaskList;
