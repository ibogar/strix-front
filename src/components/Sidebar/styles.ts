import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { colors, fonts } from '../../styles'


export const SidebarContainer = styled.aside`
    background-color: ${colors.paleSky}80;
    max-width: 360px;
    padding: 8px;
    color: ${colors.jetBlack};
    font-size: 14px;
    box-shadow: 2px 2px 0 ${colors.cerulean};
`

export const ProfilePic = styled.img`
    width: 100%;
    box-shadow: 2px 2px 0 ${colors.darkSlateGrey}CC;
`

export const Name = styled.h3`
    font-size: 16px;
    font-weight: bold;
    padding: 8px;
`

export const Username = styled.p`
    font-size: 8px;
    padding: 6px;
    color: ${colors.jetBlack}CC;
`

export const ProfileDescription = styled.p`
    font-size: 8px;
    padding: 6px;
    font-family: ${fonts.highlightFont};
`

export const SidebarLinks = styled(Link)`
    font-size: 12px;
    padding: 6px;
    border-top: 1px solid ${colors.darkSlateGrey};
`