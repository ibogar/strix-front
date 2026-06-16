import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { 
    CreateCommentPayload,
    CreatePostPayload,
    EditProfilePayload, 
    LoginPayload, 
    RegisterPayload 
} from '../types/apiPayloads'

import type { 
    GenericMessageResponse, 
    GetCommentsResponse, 
    GetPostsResponse, 
    GetUserResponse, 
    LoggedUserResponse, 
    LoginResponse, 
    RefreshResponse, 
    RegisterResponse 
} from '../types/apiResponses'

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,

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
    tagTypes: ['User', 'Posts', 'Comments'],
    endpoints: (builder) => ({
        register: builder.mutation<RegisterResponse, RegisterPayload>({
            query: (body) => ({
                url: 'users/',
                method: 'POST',
                body
                })
        }),
        editProfile: builder.mutation<GetUserResponse, EditProfilePayload>({
            query: ({ username, data }) => {
                const formData = new FormData()

                Object.entries(data).forEach(([key, value]) => {
                    if (value !== null && value !== '') {
                        const apiFieldMap: Record<string, string> = {
                            fullName: 'full_name',
                            profilePicture: 'profile_picture',
                            currentPassword: 'current_password',
                            newPassword: 'new_password'
                        }

                        formData.append(
                            apiFieldMap[key] ?? key,
                            value
                        )
                    }
                })

                return {
                    url: `users/${username}/`,
                    method: 'PATCH',
                    body: formData
                }
            },
            invalidatesTags: ['User']
        }),
        login: builder.mutation<LoginResponse, LoginPayload>({
            query: (body) => ({
                url: 'token/',
                method: 'POST',
                body
            })
        }),
        getLoggedUser: builder.query<LoggedUserResponse, void>({
            query: () => 'users/logged_user/'
        }),
        getUserByUsername: builder.query<GetUserResponse, string>({
            query: (username) => `users/${username}/`,
            providesTags: ['User']
        }),
        getSearchUsers: builder.query<GetUserResponse[], string>({
            query: (searchQuery) => `users/?search=${searchQuery}`,
            providesTags: ['User']
        }),
        followUser: builder.mutation<GenericMessageResponse, string>({
            query: (username) => ({
                url: `users/${username}/follow/`,
                method: 'POST'
            }),
            invalidatesTags: ['User']
        }),
        unfollowUser: builder.mutation<GenericMessageResponse, string>({
            query: (username) => ({
                url: `users/${username}/unfollow/`,
                method: 'POST'
            }),
            invalidatesTags: ['User']
        }),
        createPost: builder.mutation<GetPostsResponse, CreatePostPayload>({
            query: (body) => ({
                url: 'posts/',
                method: 'POST',
                body
                }),
            invalidatesTags: ['Posts']
        }),
        getMyPosts: builder.query<GetPostsResponse[], void>({
            query: () => 'posts/mine/',
            providesTags: ['Posts']
        }),
        getFeed: builder.query<GetPostsResponse[], void>({
            query: () => 'posts/feed/',
            providesTags: ['Posts']
        }),
        getUserPosts: builder.query<GetPostsResponse[], string>({
            query: (username) => `users/${username}/posts/`,
            providesTags: ['Posts']
        }),
        deletePost: builder.mutation<number, number>({
            query: (id) => ({
                url: `posts/${id}/`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Posts']
        }),
        likePost: builder.mutation<GenericMessageResponse, number>({
            query: (id) => ({
                url: `posts/${id}/like/`,
                method: 'POST'
            }),
            invalidatesTags: ['Posts']
        }),
        unlikePost: builder.mutation<GenericMessageResponse, number>({
            query: (id) => ({
                url: `posts/${id}/unlike/`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Posts']
        }),
        createComment: builder.mutation<GetCommentsResponse, CreateCommentPayload>({
            query: ({id, content}) => ({
                url: `posts/${id}/comment/`,
                method: 'POST',
                body: {
                    content: content
                }
            }),
            invalidatesTags: ['Comments']
        }),
        getComments: builder.query<GetCommentsResponse[], number>({
            query: (id) => `posts/${id}/comments/`,
            providesTags: ['Comments']
        }),
    })
})


export const { 
    useRegisterMutation,
    useEditProfileMutation,
    useLoginMutation, 
    useGetLoggedUserQuery,
    useGetUserByUsernameQuery,
    useGetSearchUsersQuery,
    useFollowUserMutation,
    useUnfollowUserMutation,
    useCreatePostMutation,
    useGetMyPostsQuery,
    useGetFeedQuery,
    useGetUserPostsQuery,
    useDeletePostMutation,
    useLikePostMutation,
    useUnlikePostMutation,
    useCreateCommentMutation,
    useGetCommentsQuery
} = api

export default api