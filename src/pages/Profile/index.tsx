import { useParams } from 'react-router-dom'

import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import Feed from '../../components/Feed'

import { Content } from '../../styles'

import { useGetUserByUsernameQuery, useGetUserPostsQuery } from '../../services/api'

const Profile = () => {
    const { username: usernameParam } = useParams()
    const { data: user } = useGetUserByUsernameQuery(usernameParam!)
    const { data: posts} = useGetUserPostsQuery(usernameParam!)

    
    const profilePic = user?.profile_picture ?? 'https://placehold.co/320'
    const fullName = user?.full_name ?? ''
    const username = user?.username ?? ''
    const bio = user?.bio ?? ''
    const followingCount = user?.following_count ?? 0
    const followersCount = user?.followers_count ?? 0
    const isFollowing = user?.is_following ?? false

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
                <Feed 
                    fullName={fullName}
                    posts={posts}
                />
            </Content>
        </div>
    ) 
}

export default Profile