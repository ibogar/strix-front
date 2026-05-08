import { Link, useLocation } from 'react-router-dom'

import logopng from '../../../assets/logo_256.png'

import * as S from './styles'

const Header = () => {
    return (
        <>
            <S.Logo href={"/"} $width="512px">
                <img src={logopng} alt="Strix logo" />
            </S.Logo >
            <S.HeaderTitle>
                Welcome to <span>Strix</span>! Your new way to share knowledge
            </S.HeaderTitle>

            <S.Navbar>
                <S.Logo href={"/"} $width="32px">
                    <img src={logopng} alt="Strix logo" />
                </S.Logo >
                <div>
                    <S.NavLink href={"/"}>
                        <i className="bi bi-house-door-fill"></i>
                        <h2>Home</h2>
                    </S.NavLink>
                    <S.NavLink href={"/"}>
                        <i className="bi bi-person-circle"></i>
                        <h2>Profile</h2>
                    </S.NavLink>
                </div>
            </S.Navbar>
        </>

    )
}

export default Header