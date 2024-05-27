import { useTask } from "../../app/hooks";
import Loading from "./loading";
import Task from "./task";

const TaskList = () => {
  const [tasks, loading] = useTask();

  return (
    <section className="task-list">
      <Loading loading={loading} />
      {tasks && tasks.map((t) => <Task key={t.id} task={t} />)}
    </section>
  );
};
export default TaskList;
