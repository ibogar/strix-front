import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { LoginPayload, LoginResponse, RefreshResponse, RegisterPayload, RegisterResponse } from '../types/auth'
import type { UserType } from '../types/user'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/',

    prepareHeaders: (headers) => {
        const token = localStorage.getItem('accessToken')

        if (token) {
            headers.set('Authorization', `Bearer ${token}`)
        }

        return headers
    }
})

const baseQueryWithReauth = async (
    args: Parameters<typeof baseQuery>[0],
    api: Parameters<typeof baseQuery>[1],
    extraOptions: Parameters<typeof baseQuery>[2]
) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result.error?.status === 401) {
        const refreshToken =
            localStorage.getItem('refreshToken')

        if (!refreshToken) {
            localStorage.removeItem('accessToken')

            return result
        }

        const refreshResult = await baseQuery(
            {
                url: 'token/refresh/',
                method: 'POST',
                body: {
                    refresh: refreshToken
                }
            },
            api,
            extraOptions
        )

        if (refreshResult.data) {
            const data = refreshResult.data as RefreshResponse

            localStorage.setItem('accessToken', data.access)

            result = await baseQuery(args, api, extraOptions)
        } else {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
        }
    }

    return result
}

const api = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        register: builder.mutation<RegisterResponse, RegisterPayload>({
            query: (body) => ({
                url: 'users/',
                method: 'POST',
                body
                })
        }),
        login: builder.mutation<LoginResponse, LoginPayload>({
            query: (body) => ({
                url: 'token/',
                method: 'POST',
                body
            })
        }),
        getLoggedUser: builder.query<UserType, void>({
            query: () => 'users/logged_user',
        }),
        getUserById: builder.query<UserType, number>({
            query: (id) => `users/${id}`
        })
    })
})


export const { 
    useRegisterMutation,
    useLoginMutation, 
    useGetLoggedUserQuery,
    useGetUserByIdQuery
} = api

export default api