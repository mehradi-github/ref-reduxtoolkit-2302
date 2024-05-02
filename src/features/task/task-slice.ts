import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import data from "../../api/data.json";

export type TaskState = {
  entities: Task[];
};
const initialState: TaskState = {
  entities: data.tasks,
};

type DraftTask = RequireOnly<Task, "title">;
export const createTask = (draftTask: DraftTask): Task => {
  return { id: nanoid(), ...draftTask };
};
export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const task = createTask(action.payload);
      state.entities.unshift(task);
    },
    removeTask: (state, action) => {},
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice;
