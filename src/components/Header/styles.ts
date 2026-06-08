import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { colors, fonts } from '../../styles'

type HeaderProps = {
    $width: string
}


export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

export const Logo = styled(Link)<HeaderProps>`

    img {
        width: ${({ $width }) => $width};
    }
`

export const HeaderTitle = styled.h1`
    color: ${colors.jetBlack};
    font-family: ${fonts.mainFont};
    margin-top: 16px;
    margin-bottom: 32px;

    span {
        display: inline;
        color: ${colors.carrotOrange};
        font-family: ${fonts.highlightFont};
    }
`

export const Navbar = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid ${colors.cerulean};
    margin-bottom: 12px;
    padding: 0 16px 8px;
`

export const NavLinksContainer = styled.div`
    display: flex;
    align-items: center;
`

export const NavLink = styled(Link)`
    display:flex;
    align-items: center;
    color: ${colors.carrotOrange};
    text-decoration: none;
    margin-left: 24px;

    i {
        font-size: 24px;
        margin-right: 4px;
    }
`

export const SearchContainer = styled.div`
    margin-top: 24px;
    position: relative;
`

export const DropdownContainer = styled.div`
    width: 240px;
    border: 1px solid ${colors.jetBlack};
    border-radius: 2px;
    position: absolute;
    background-color: ${colors.snow};
`

export const DpdUser = styled(Link)`
    display: flex;
    text-decoration: none;
    color: ${colors.jetBlack};
    box-shadow: 2px 2px 0 ${colors.darkSlateGrey}CC;
    align-items: center;

    img {
        width: 60px;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        box-shadow: 2px 2px 0 ${colors.darkSlateGrey}CC;
        margin: 6px;
    }

    div {
        margin: 6px;
        flex-direction: column;
    }

    h4 {
        font-size: 16px;
    }
        
    p {
        font-size: 12px;
        color: ${colors.jetBlack}AA;
        margin-top: 4px;
    }
`