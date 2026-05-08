import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { colors, fonts } from '../../styles'

type HeaderProps = {
    $width: string
}

export const Logo = styled.a<HeaderProps>`
    width: ${({ $width }) => $width};
`

export const HeaderTitle = styled.h1`
    display:flex;
    justify-content: center;
    color: ${colors.jetBlack};
    font-family: ${fonts.mainFont};
    margin-top: 16px;
    margin-bottom: 32px;

    span {
        color: ${colors.carrotOrange};
        font-family: ${fonts.highlightFont};
    }
`

export const Navbar = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

export const NavLink = styled.a`
    color: ${colors.carrotOrange};
`