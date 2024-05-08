import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
  nanoid,
} from "@reduxjs/toolkit";
import data from "../../api/data.json";

export type TaskState = {
  entities: Task[];
  loading?: boolean;
};
const initialState: TaskState = {
  entities: [],
};

type DraftTask = RequireOnly<Task, "title">;
export const createTask = (draftTask: DraftTask): Task => {
  return { id: nanoid(), ...draftTask };
};

export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async (): Promise<Task[]> => {
    const response = await fetch("/api/tasks").then((res) => res.json());
    return response.tasks;
  }
);
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const task = createTask(action.payload);
      state.entities.unshift(task);
    },
    removeTask: (state, action: PayloadAction<Task["id"]>) => {
      const index = state.entities.findIndex((t) => t.id === action.payload);
      state.entities.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchTasks.fulfilled,
      (state, action: PayloadAction<Task[]>) => {
        state.entities = action.payload;
        state.loading = false;
      }
    );
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice;
