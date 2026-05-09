import styled from 'styled-components'

import { colors, fonts } from '../../styles'

export const EditProfileContainer = styled.div`
    max-width: 720px;
    margin: 0 auto;
    padding-bottom: 64px;
`

export const ProfileSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
`

export const Form = styled.form`
    width: 100%;
    background-color: ${colors.darkSlateGrey};
    border-radius: 8px;
    padding: 24px;
    box-shadow: 6px 6px 0 ${colors.cerulean};
`

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    label {
        color: ${colors.paleSky};
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 8px;
    }

    input,
    textarea {
        width: 100%;
        background-color: ${colors.paleSky};
        color: ${colors.jetBlack};
        border: 2px solid ${colors.paleSky};
        border-radius: 5px;
        padding: 12px;
        font-size: 1rem;
        font-family: ${fonts.mainFont};
        transition: 0.2s ease;
    }

    textarea {
        min-height: 120px;
        resize: none;
    }

    input:focus,
    textarea:focus {
        outline: none;
        border-color: ${colors.carrotOrange};
    }

    input::placeholder,
    textarea::placeholder {
        color: ${colors.jetBlack}99;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    margin-top: 32px;
`