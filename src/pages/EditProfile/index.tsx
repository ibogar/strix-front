import Header from '../../components/Header'

import * as P from '../../components/Sidebar/styles'
import { Btn, PageTitle } from '../../styles'
import * as S from './styles'


import { useLocation } from 'react-router-dom'

const EditProfile = () => {
    const location = useLocation()
    const path = location.pathname

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

                <S.Form>
                    <S.InputGroup>
                        <label htmlFor="name">
                            Name
                        </label>

                        <input
                            id="name"
                            type="text"
                            placeholder="Your name"
                        />
                    </S.InputGroup>

                    <S.InputGroup>
                        <label htmlFor="username">
                            Username
                        </label>

                        <input
                            id="username"
                            type="text"
                            placeholder="#username"
                        />
                    </S.InputGroup>

                    <S.InputGroup>
                        <label htmlFor="bio">
                            Bio
                        </label>

                        <textarea
                            id="bio"
                            placeholder="Tell people about yourself"
                        />
                    </S.InputGroup>

                    <S.InputGroup>
                        <label htmlFor="image">
                            Profile image URL
                        </label>

                        <input
                            id="image"
                            type="text"
                            placeholder="https://..."
                        />
                    </S.InputGroup>

                    <S.ButtonContainer>
                        <Btn className="positive">
                            Save changes
                        </Btn>

                        <Btn className="danger">
                            Cancel
                        </Btn>
                    </S.ButtonContainer>
                </S.Form>
            </S.EditProfileContainer>
        </div>
    )
}

export default EditProfile