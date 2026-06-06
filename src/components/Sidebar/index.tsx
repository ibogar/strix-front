import { useLocation } from 'react-router-dom'
import * as S from './styles'

interface Props {
    profilePic: string
    fullName: string
    username: string
    bio: string
    followingCount: number
    followersCount: number
}

const Sidebar = ({ profilePic, fullName, username, bio, followingCount, followersCount } : Props) => {
    const location = useLocation();
    const path = location.pathname;

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
                <S.SidebarLink to={"/following"}>Following {followingCount}</S.SidebarLink>
                <S.SidebarLink to={"/followers"}>Followers {followersCount}</S.SidebarLink>
            </S.SidebarLinksContainer>
            {path.startsWith('/profile') ? 
                (
                    <S.SidebarBtn className="positive">Follow</S.SidebarBtn>
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