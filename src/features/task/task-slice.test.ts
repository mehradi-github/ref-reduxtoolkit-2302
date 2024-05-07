import { addTask, createTask, tasksReducer } from "./task-slice";

describe("tasksSlice", () => {
  const initialState = {
    entities: [
      createTask({ title: "title 1" }),
      createTask({ title: "title 2" }),
    ],
  };
  it(`should add a task when the ${addTask}`, async () => {
    const task = createTask({ title: "Profit" });
    const action = addTask(task);
    const newState = tasksReducer(initialState, action);

    expect(newState.entities).toEqual([task, ...initialState.entities]);
  });
});
