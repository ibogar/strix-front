import * as S from './styles'

const Sidebar = () => {
    return (
        <S.SidebarContainer>
            <S.ProfilePic src="https://placehold.co/400" alt="Profile picture"></S.ProfilePic>
            <S.Name>Iuri Guilherme Bogar Portilho</S.Name>
            <S.Username>#ibogar</S.Username>
            <S.ProfileDescription>Oi, eu sou o Iuri.</S.ProfileDescription>
            <S.SidebarLinks to={"/profile"}>Posts</S.SidebarLinks>
            <S.SidebarLinks to={"/profile"}>Following</S.SidebarLinks>
            <S.SidebarLinks to={"/profile"}>Followers</S.SidebarLinks>
            <p>Edit profile</p>
        </S.SidebarContainer>
    )
}

export default Sidebar