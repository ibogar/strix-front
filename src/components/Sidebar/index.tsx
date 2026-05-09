import * as S from './styles'

const Sidebar = () => {
    return (
        <S.SidebarContainer>
            <S.ProfilePic src="https://placehold.co/400" alt="Profile picture"></S.ProfilePic>
            <S.Name>Iuri Guilherme Bogar Portilho</S.Name>
            <S.Username>#ibogar</S.Username>
            <S.ProfileDescription>Oi, eu sou o Iuri.</S.ProfileDescription>
            <S.SidebarLinksContainer>
                <S.SidebarLink to={"/profile"}>Posts</S.SidebarLink>
                <S.SidebarLink to={"/profile"}>Following</S.SidebarLink>
                <S.SidebarLink to={"/profile"}>Followers</S.SidebarLink>
            </S.SidebarLinksContainer>
            <S.EditBtn to={"/edit-profile"}>Edit profile</S.EditBtn>
        </S.SidebarContainer>
    )
}

export default Sidebar