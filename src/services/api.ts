import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { RegisterPayload, RegisterResponse } from '../types/auth'
import type { UserType } from '../types/user'

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api/'
    }),
    endpoints: (builder) => ({
        register: builder.mutation<RegisterResponse, RegisterPayload>({
        query: (body) => ({
            url: 'users/',
            method: 'POST',
            body
            })
        }),
        getUserById: builder.query<UserType, number>({
            query: (id) => `users/${id}`
        })
    })
})


export const { 
    useGetUserByIdQuery,
    useRegisterMutation 
} = api

export default api