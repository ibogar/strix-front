import Header from '../../components/Header'
import EditProfileForm from '../../components/forms/EditProfileForm'

import { PageTitle } from '../../styles'
import * as S from './styles'


const EditProfile = () => {

    return (
        <div className="container">
            <Header />

            <S.EditProfileContainer>
                <PageTitle>
                    Profile editing
                </PageTitle>

                <S.ProfileSection>
                    <S.ProfilePic
                        src="https://placehold.co/320"
                        alt="Profile picture"
                    />

                    <S.Name>
                        Iuri Guilherme Bogar Portilho
                    </S.Name>

                    <S.Username>
                        #ibogar
                    </S.Username>

                    <S.ProfileDescription>
                        Oi, eu sou o Iuri
                    </S.ProfileDescription>
                </S.ProfileSection>

                <EditProfileForm />
            </S.EditProfileContainer>
        </div>
    )
}

export default EditProfile