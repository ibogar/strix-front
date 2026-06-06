import Header from '../../components/Header'
import EditProfileForm from '../../components/forms/EditProfileForm'
import { useGetLoggedUserQuery, useGetUserByUsernameQuery } from '../../services/api'

import { PageTitle } from '../../styles'
import * as S from './styles'


const EditProfile = () => {
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

    return (
        <div className="container">
            <Header />

            <S.EditProfileContainer>
                <PageTitle>
                    Profile editing
                </PageTitle>

                <S.ProfileSection>
                    <S.ProfilePic src={profilePic} alt="Profile picture" />
                    <S.Name>{fullName}</S.Name>
                    <S.Username>#{username}</S.Username>
                    <S.ProfileDescription>{bio}</S.ProfileDescription>
                </S.ProfileSection>

                <EditProfileForm username={username} />
            </S.EditProfileContainer>
        </div>
    )
}

export default EditProfile