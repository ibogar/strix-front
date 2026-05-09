import { useLocation } from 'react-router-dom'
import * as S from './styles'

const FollowUser = () => {
    const location = useLocation();

    return (
        <S.FolUserContainer>
            <S.FolUserLink to={'/following'}>
                <S.FolUserImg src="https://placehold.co/64" alt="User photo" />
                <S.FolUser>Iuri Guilherme Bogar Portilho</S.FolUser>
                <S.FolUserName>#ibogar</S.FolUserName>
            </S.FolUserLink>
            {location.pathname === '/followers' ? (
                <S.FolUserBtn>Remove follower</S.FolUserBtn>    
            ) : (
                <S.FolUserBtn>Unfollow</S.FolUserBtn>
            )}
        </S.FolUserContainer>
    )
}

export default FollowUser