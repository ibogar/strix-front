export interface RegisterPayload {
    email: string
    full_name: string
    username: string
    password: string
}

export interface RegisterResponse {
    email: string
    full_name: string
    username: string
}

export interface LoginPayload {
    email: string
    password: string
}

export interface LoginResponse {
    refresh: string
    access: string
}

export interface RefreshResponse {
    refresh: string
    access: string
}

export interface EditProfilePayload {
    full_name?: string
    username?: string
    bio?: string
    image?: File
    current_password?: string
    new_password?: string
}