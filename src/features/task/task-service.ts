import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const taskApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => {
    return {
      getTask: builder.query<{ tasks: Task[] }, void>({
        query: () => "tasks",
      }),
    };
  },
});
export const { useGetTaskQuery } = taskApi;
