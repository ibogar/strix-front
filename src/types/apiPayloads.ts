export interface RegisterPayload {
    email: string
    full_name: string
    username: string
    password: string
}

export interface LoginPayload {
    email: string
    password: string
}

interface EditFormData {
    fullName: string
    username: string
    bio: string
    profilePicture: File | null
    currentPassword: string
    newPassword: string
    confirmNewPassword: string
}

export interface EditProfilePayload {
    username: string
    data: EditFormData
}

export interface CreatePostPayload {
    content: string
}

export interface CreateCommentPayload {
    id: number
    content: string
}