import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from '../../styles'

export const FolUserContainer = styled.div`
    width: 100%;
    background-color: ${colors.darkSlateGrey};
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 20px;
    border: 2px solid ${colors.darkSlateGrey};
    box-shadow: 6px 6px 0 ${colors.cerulean};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const FolUserLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 16px;
    text-decoration: none;
    flex: 1;
`

export const FolUserImg = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 2px 2px 0 ${colors.jetBlack};
`

export const FolUser = styled.h5`
    color: ${colors.paleSky};
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 4px;
    text-shadow: 1px 1px 0 ${colors.jetBlack};
`

export const FolUserName = styled.p`
    color: ${colors.paleSky}AA;
    font-size: 0.95rem;
`

export const FolUserBtn = styled.button`
    padding: 8px 20px;
    background-color: ${colors.scarletFire};
    color: ${colors.jetBlack};
    border: 2px solid ${colors.scarletFire};
    border-radius: 25px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
        box-shadow: 4px 4px 0 ${colors.cerulean};
    }
`