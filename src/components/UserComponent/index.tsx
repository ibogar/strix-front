import { useLocation } from 'react-router-dom'
import * as S from './styles'

interface Props {
    profilePic: string
    fullName: string
    username: string
}

const UserComponent = ({ profilePic, fullName, username }: Props) => {
    const location = useLocation();

    return (
        <S.FolUserContainer>
            <S.FolUserLink to={`/profile/${username}`}>
                <S.FolUserImg src={profilePic ?? "https://placehold.co/64"} alt="User photo" />
                <S.FolUser>{fullName}</S.FolUser>
                <S.FolUserName>#{username}</S.FolUserName>
            </S.FolUserLink>
            {location.pathname === '/followers' ? (
                <S.FolUserBtn>Remove follower</S.FolUserBtn>    
            ) : (
                <S.FolUserBtn>Unfollow</S.FolUserBtn>
            )}
        </S.FolUserContainer>
    )
}

export default UserComponent