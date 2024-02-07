import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000'
    }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (body: { username: string; email: string; password: string; }) => {
                return {
                    url: "/users",
                    method: "POST",
                    body,
                }
            }
        }),
        login: builder.mutation({
            query: (body: { email: string; password: string }) => {
                return {
                    url: "/auth",
                    method: "POST",
                    body,
                }
            }
        }),
        logout: builder.query<void, void>({
            query: () => "/auth"
        }),
    }),
})

export const { useLoginMutation } = api;