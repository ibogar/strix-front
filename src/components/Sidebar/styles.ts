import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { colors, fonts } from '../../styles'


export const SidebarContainer = styled.aside`
    background-color: ${colors.paleSky}33;
    max-width: 360px;
    padding: 8px;
    color: ${colors.jetBlack};
    font-size: 14px;
    box-shadow: 2px 2px 0 ${colors.cerulean};
`

export const ProfilePic = styled.img`
    width: 100%;
    box-shadow: 2px 2px 0 ${colors.darkSlateGrey}CC;
    border-radius: 50%;
    margin: 8px 0;
`

export const Name = styled.h3`
    font-size: 24px;
    font-weight: bold;
    padding: 8px;
`

export const Username = styled.p`
    font-size: 16px;
    padding: 6px;
    color: ${colors.jetBlack}CC;
`

export const ProfileDescription = styled.p`
    font-size: 20px;
    padding: 6px;
    font-family: ${fonts.highlightFont};
`

export const SidebarLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${colors.darkSlateGrey};
    padding: 8px;
`

export const SidebarLink = styled(Link)`
    padding: 8px;
    margin-top: 8px;
    border: 1px solid ${colors.darkSlateGrey}33;
    box-shadow: 2px 2px 0 ${colors.darkSlateGrey};
    font-size: 16px;
    text-decoration: none;
    color: ${colors.jetBlack};
`

export const EditBtn = styled(Link)`
    display: block;
    padding: 6px;
    margin: 8px;
    background-color: ${colors.carrotOrange};
    border: 1px solid ${colors.darkSlateGrey}33;
    box-shadow: 2px 2px 0 ${colors.darkSlateGrey};
    font-size: 12px;
    font-weight: bold;
    text-decoration: none;
    color: ${colors.jetBlack};
`