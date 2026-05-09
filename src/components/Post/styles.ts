import styled from 'styled-components'
import { colors } from '../../styles'


export const PostContainer = styled.div`
    width: 100%;
    background-color: ${colors.darkSlateGrey};
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 24px;
    border: 2px solid ${colors.darkSlateGrey};
    box-shadow: 6px 6px 0 ${colors.cerulean};
    display: flex;
    flex-direction: column;
`

export const User = styled.h5`
    color: ${colors.paleSky};
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 4px;
`

export const Username = styled.p`
    color: ${colors.paleSky}99;
    font-size: 0.9em;
    margin-bottom: 16px;
`

export const Content = styled.textarea`
    width: 100%;
    min-height: 60px;
    resize: none;
    background-color: ${colors.paleSky};
    color: ${colors.jetBlack};
    border: 2px solid ${colors.paleSky};
    border-radius: 5px;
    padding: 12px;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 16px;
    
    &:focus {
        outline: none;
        border-color: ${colors.carrotOrange};
    }

    &::placeholder {
        color: ${colors.jetBlack}99;
    }
`

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
`

export const ActionsContainer = styled.div`
    display: flex;
    gap: 12px;
`

export const ActionBtn = styled.button`
    display: flex;
    align-items: center;
    gap: 6px;
    background: transparent;
    border: none;
    color: ${colors.paleSky};
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s ease;

    &.like:hover {
        color: ${colors.scarletFire};
    }

    &.comment:hover {
        color: ${colors.cerulean};
    }
`

export const BtnContainer = styled.div`
    display: flex; 
    gap: 8px;
    align-self: flex-end;
`

export const PostBtn = styled.button`
    padding: 8px 24px;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s ease;

    &.edit {
        background-color: ${colors.carrotOrange};
        color: ${colors.jetBlack};
        border: 2px solid ${colors.carrotOrange};
    }

    &.delete {
        background-color: ${colors.scarletFire};
        color: ${colors.jetBlack};
        border: 2px solid ${colors.scarletFire};
    }

    &:hover {
        box-shadow: 4px 4px ${colors.cerulean};
    }
`