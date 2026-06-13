import { useLocation } from 'react-router-dom'
import * as S from './styles'
import { useFollowUserMutation, useUnfollowUserMutation } from '../../services/api'

interface Props {
    profilePic: string
    fullName: string
    username: string
    bio: string
    followingCount: number
    followersCount: number
    isFollowing?: boolean
}

const Sidebar = ({ profilePic, fullName, username, bio, followingCount, followersCount, isFollowing } : Props) => {
    const location = useLocation()
    const path = location.pathname
    const [ follow ] = useFollowUserMutation()
    const [ unfollow ] = useUnfollowUserMutation()

    const logout = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        window.location.reload()
    }

    return (
        <S.SidebarContainer>
            <S.ProfilePic src={profilePic} alt="Profile picture"></S.ProfilePic>
            <S.Name>{fullName}</S.Name>
            <S.Username>#{username}</S.Username>
            <S.ProfileDescription>{bio}</S.ProfileDescription>
            <S.SidebarLinksContainer>
                <S.SidebarLink to={"/my_profile"}>Posts</S.SidebarLink>
                <S.SidebarLink 
                    to={path.startsWith('/profile') ? 
                        `/profile/${username}/following` : 
                        "/following"
                    }
                >
                    Following {followingCount}
                </S.SidebarLink>
                <S.SidebarLink 
                    to={path.startsWith('/profile') ? 
                        `/profile/${username}/followers` : 
                        "/followers"
                    }
                >
                    Followers {followersCount}
                </S.SidebarLink>
            </S.SidebarLinksContainer>
            {path.startsWith('/profile') ? 
                (
                    <S.SidebarBtn 
                        className={isFollowing ? "negative" : "positive"}
                        onClick={() => (isFollowing ? 
                                unfollow(username) : 
                                follow(username)
                            )}
                        >
                            {isFollowing ? "Unfollow" : "Follow"}
                    </S.SidebarBtn>
                ) : (
                    <>
                        <S.EditBtn to={"/edit_profile"}>Edit profile</S.EditBtn>
                        <S.SidebarBtn className="negative" onClick={logout}>Logout</S.SidebarBtn>
                    </>
                )
            }
        </S.SidebarContainer>
    )
}

export default Sidebar