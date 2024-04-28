import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: INITIAL_STATE,
  reducers: {
    addTask: (state, action) => {},
    removeTask: (state, action) => {},
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice;
