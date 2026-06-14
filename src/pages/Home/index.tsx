import Feed from '../../components/Feed'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

import { 
    useGetFeedQuery, 
    useGetLoggedUserQuery, 
    useGetUserByUsernameQuery 
} from '../../services/api'

import { Content } from '../../styles'

const Home = () => {
    const { data: loggedUser } = useGetLoggedUserQuery()
    const { data: userByUsername } = 
        useGetUserByUsernameQuery(
            loggedUser?.username ?? '',
            {
                skip: !loggedUser
            })

    const profilePic = userByUsername?.profile_picture ?? 'https://placehold.co/320'
    const fullName = userByUsername?.full_name ?? ''
    const username = userByUsername?.username ?? ''
    const bio = userByUsername?.bio ?? ''
    const followingCount = userByUsername?.following_count ?? 0
    const followersCount = userByUsername?.followers_count ?? 0

    const { data: getFeed } = useGetFeedQuery()

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
                />
                <Feed 
                    fullName=''
                    posts={getFeed}
                />
            </Content>
        </div>
    )
}

export default Home