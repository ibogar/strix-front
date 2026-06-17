import { useLocation } from 'react-router-dom'

import UserCard from '../UserCard'

import { PageTitle } from '../../styles'
import * as S from './styles'
import type { UserPreview } from '../../types/user'

interface Props {
    followingList?: UserPreview[]
    followersList?: UserPreview[]
}


const Follow = ({followingList, followersList}: Props) => {
    const location = useLocation()
    const path = location.pathname

    return (
        <S.FollowContainer>
            {path.endsWith('/followers') ? (
                <PageTitle>Followers</PageTitle>
            ) : (
                <PageTitle>Following</PageTitle>
            )}
 
            {followingList?.map((user) => (
                <UserCard 
                    key={user.id}
                    profilePic={user.profile_picture} 
                    fullName={user.full_name} 
                    username={user.username}
                    isFollowing={user.is_following}
                />    
            ))}

            {followersList?.map((user) => (
                <UserCard 
                    key={user.id}
                    profilePic={user.profile_picture} 
                    fullName={user.full_name} 
                    username={user.username} 
                />    
            ))}
            
        </S.FollowContainer>
    )
}

export default Follow
