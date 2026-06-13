import { useParams } from 'react-router-dom'
import Follow from '../../components/Follow'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { useGetUserByUsernameQuery } from '../../services/api'
import { Content } from '../../styles'




const FollowersPage = () => {
    const { username: usernameParam } = useParams()
    const { data } = useGetUserByUsernameQuery(usernameParam!)
    
    const profilePic = data?.profile_picture ?? 'https://placehold.co/320'
    const fullName = data?.full_name ?? ''
    const username = data?.username ?? ''
    const bio = data?.bio ?? ''
    const followingCount = data?.following_count ?? 0
    const followers = data?.followers ?? []
    const followersCount = data?.followers_count ?? 0
    const isFollowing = data?.is_following ?? false

    return (
        <div className="container">
            <Header />
            <Content>
                <Sidebar 
                    profilePic={profilePic}
                    fullName={fullName}  
                    username={username}
                    bio={bio}
                    followingCount={followingCount}
                    followersCount={followersCount}
                    isFollowing={isFollowing}
                />
                <Follow followersList={followers} />
            </Content>
        </div>
    )
}

export default FollowersPage