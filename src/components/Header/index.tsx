import { useLocation } from 'react-router-dom'

import logo512 from '../../../assets/logo_512.png'
import logo256 from '../../../assets/logo_256.png'

import * as S from './styles'

const Header = () => {
    const location = useLocation();

    if (location.pathname === '/login' || location.pathname === '/register') {
        return (
            <S.HeaderContainer>
                <S.Logo to={"/"} $width="400px">
                    <img src={logo512} alt="Strix logo" />
                </S.Logo >
                <S.HeaderTitle>
                    Welcome to{' '}<span>Strix</span>! Your new way to share knowledge
                </S.HeaderTitle>
            </S.HeaderContainer>
        )
    } else {
        return (
            <>
                <S.Navbar>
                    <S.Logo to={"/"} $width="80px">
                        <img src={logo256} alt="Strix logo" />
                    </S.Logo >
                    <S.NavLinksContainer>
                        <S.NavLink to={"/"}>
                            <i className="bi bi-house-door-fill"></i>
                            <h2>Home</h2>
                        </S.NavLink>
                        <S.NavLink to={"/profile"}>
                            <i className="bi bi-person-circle"></i>
                            <h2>Profile</h2>
                        </S.NavLink>
                    </S.NavLinksContainer>
                </S.Navbar>
            </>
        )
    }
}

export default Header