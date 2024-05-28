import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "inspector";
export const taskApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => {
    return {
      getTask: builder.query<{ tasks: Task[] }, void>({
        query: () => ({ url: "tasks", method: "GET" }),
      }),
      updateTask: builder.mutation<Task, Partial<Task> & Pick<Task, "id">>({
        query: ({ id, ...patch }) => ({
          url: `task/${id}`,
          method: "PATCH",
          body: patch,
        }),
        transformResponse: (response: { data: Task }, meta, arg) =>
          response.data,
      }),
    };
  },
});
export const { useGetTaskQuery } = taskApi;
