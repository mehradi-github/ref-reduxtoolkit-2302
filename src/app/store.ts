import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { tasksReducer } from "../features/task/task-slice";
import { UsersReducer } from "../features/user/user-slice";
import { taskApi } from "../features/task/task-service";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: tasksReducer,
    users: UsersReducer,
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(taskApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
