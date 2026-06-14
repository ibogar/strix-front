import type { UserPreview } from "./user"

export interface RegisterResponse {
    email: string
    full_name: string
    username: string
}

export interface LoginResponse {
    refresh: string
    access: string
}

export interface RefreshResponse {
    refresh: string
    access: string
}

export interface LoggedUserResponse {
    id: number
    username: string
}

export interface GetUserResponse {
    id: number
    full_name: string
    email: string
    username: string
    bio: string
    profile_picture: string
    following: UserPreview[]
    following_count: number
    followers:UserPreview[]
    followers_count: number
    is_following: boolean
}

export interface FollowUserResponse {
    message: string
}

export interface GetPostsResponse {
    id: number,
    author: UserPreview,
    content: string
}