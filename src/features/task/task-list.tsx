import { useMemo } from "react";
import { useTask } from "../../app/hooks";
import Loading from "./loading";
import Task from "./task";
import { useGetTaskQuery } from "./task-service";

const TaskList = () => {
  // const [tasks, loading] = useTask();
  const { data, isLoading } = useGetTaskQuery();
  console.log("RTK:", JSON.stringify(data));
  const tasks = useMemo(() => data?.tasks || [], [data]);

  return (
    <section className="task-list">
      <Loading loading={isLoading} />
      {tasks && tasks.map((t) => <Task key={t.id} task={t} />)}
    </section>
  );
};
export default TaskList;
