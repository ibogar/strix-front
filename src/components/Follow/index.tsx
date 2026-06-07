
import { useLocation } from 'react-router-dom'
import * as S from './styles'
import UserComponent from '../UserComponent'
import { PageTitle } from '../../styles'


const Follow = () => {
    const location = useLocation();

    return (
        <S.FollowContainer>
            {location.pathname === '/followers' ? (
                <PageTitle>Followers</PageTitle>
            ) : (
                <PageTitle>Following</PageTitle>
            )}

            <UserComponent id={0} profilePic={''} fullName={''} username={''} />
            <UserComponent id={0} profilePic={''} fullName={''} username={''} />
            <UserComponent id={0} profilePic={''} fullName={''} username={''} />
            <UserComponent id={0} profilePic={''} fullName={''} username={''} />
            
        </S.FollowContainer>
    )
}

export default Follow