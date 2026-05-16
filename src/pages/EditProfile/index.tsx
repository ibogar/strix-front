import Header from '../../components/Header'
import ProfileForm from '../../components/forms/ProfileForm'

import * as P from '../../components/Sidebar/styles'
import { PageTitle } from '../../styles'
import * as S from './styles'


import { useLocation } from 'react-router-dom'

const EditProfile = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <div className="container">
            <Header />

            <S.EditProfileContainer>
                <PageTitle>
                    Profile editing
                </PageTitle>

                <S.ProfileSection>
                    <P.ProfilePic
                        $path={path}
                        src="https://placehold.co/320"
                        alt="Profile picture"
                    />

                    <P.Name>
                        Iuri Guilherme Bogar Portilho
                    </P.Name>

                    <P.Username>
                        #ibogar
                    </P.Username>

                    <P.ProfileDescription>
                        Oi, eu sou o Iuri
                    </P.ProfileDescription>
                </S.ProfileSection>

                <ProfileForm />
            </S.EditProfileContainer>
        </div>
    )
}

export default EditProfile