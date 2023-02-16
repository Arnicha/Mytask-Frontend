import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TaskResponse } from '../../models/tasks/TaskResponse'
import Host from '../Host'

export const tasksApi = createApi({
    reducerPath: 'tasksApi',
    baseQuery: fetchBaseQuery({ baseUrl: new Host().host }),
    endpoints: (builder) => ({
        getTasksByUserId: builder.query<Array<TaskResponse>, number>({
            query: (userId) => `users/${userId}/tasks`
        }),
    }),
})

export const { useGetTasksByUserIdQuery } = tasksApi