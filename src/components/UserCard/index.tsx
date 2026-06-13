import { useLocation } from 'react-router-dom'
import * as S from './styles'
import { useFollowUserMutation, useUnfollowUserMutation } from '../../services/api'

interface Props {
    profilePic: string
    fullName: string
    username: string
    isFollowing?: boolean
}

const UserCard = ({ profilePic, fullName, username, isFollowing }: Props) => {
    const location = useLocation()
    const path = location.pathname
    const [ follow ] = useFollowUserMutation()
    const [ unfollow ] = useUnfollowUserMutation()

    return (
        <S.FolUserContainer>
            <S.FolUserLink to={`/profile/${username}`}>
                <S.FolUserImg src={profilePic ?? "https://placehold.co/64"} alt="User photo" />
                <S.FolUser>{fullName}</S.FolUser>
                <S.FolUserName>#{username}</S.FolUserName>
            </S.FolUserLink>
            {!path.endsWith('/followers') &&
                <S.FolUserBtn
                    className={isFollowing ? "negative" : "positive"}
                    onClick={() => (isFollowing ? 
                                unfollow(username) : 
                                follow(username)
                            )}
                >
                    {isFollowing ? "Unfollow": "Follow"}
                </S.FolUserBtn>
            }
        </S.FolUserContainer>
    )
}

export default UserCard