import { apiSlice } from "../apiSlice";

const Tasks_URL="/task";

export const taskApiSlice= apiSlice.injectEndpoints({
    endpoints: ( builder ) => ({
        getDashboardStats: builder.Query({
            query: () => ({
                url: `$(TASKS_URL)/dashboard`,
                method: "GET",
                credentials: "include",
            }),
        }),

        getAllTasks: builder.query({
            query: ({ strQuery, isTrashed, search }) => ({
                url: `${TASKS_URL}?stage=${strQuery}&isTrashed=${isTrashed}&search=${search}` ,
                method: "GET",
                credentials: "include",
            }),
        }),

        createTask: builder.mutation({
            query: (id) => ({
                url: `${TASKS_URL}/create` ,
                method: "POST",
                body: data,
                credentials:"include",
            }),
        }),

        duplicateTask: builder.mutation({
            query: (id) => ({
                url: `${TASKS_URL}/duplicate/${id}`,
                method: "POST",
                body: {},
                credentials: "include",
            }),
        }),

        updateTask: builder.mutation({
            query: (id) => ({
                url: `${TASKS_URL}/update/${data._id}`,
                method: "PUT",
                body: data,
                credentials: "include",
            }),
        }),
    }),
});

export const { useGetDashbpardStatQuery,
                useGetAllTaskQuery,
                useCreateTaskMutation,
                useDuplicateTaskMutation,
                useUpdateTaskMutation,
                useTrashTaskMutation
                 } = taskApiSlice;