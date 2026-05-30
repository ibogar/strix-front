export interface UserPreview {
    id: number
    fullName: string
    username: string
    profilePicture: string
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