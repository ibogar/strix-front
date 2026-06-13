export interface UserPreview {
    id: number
    username: string
    full_name: string
    profile_picture: string
    is_following?: boolean
}

export interface UserType {
    id: number
    fullName: string
    email: string
    username: string
    bio: string
    profilePicture: string
    following: UserPreview[]
    followers: UserPreview[]
}