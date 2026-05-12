import styled from 'styled-components'
import { colors } from '../../styles'

export const FormContainer = styled.form`
    width: 50%;
    margin: 0 auto;
    padding: 32px 16px;
    background-color: ${colors.darkSlateGrey};
    border: 2px solid ${colors.darkSlateGrey};
    box-shadow: 6px 6px 0 ${colors.cerulean};
    border-radius: 5px;
`

export const InputGroup = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 16px 0;

    label {
        font-size: 2em;
        font-weight: bold;
        color: ${colors.paleSky};
    }

    input, 
    textarea {
        background-color: ${colors.paleSky};
        border: 2px solid ${colors.paleSky};
        color: ${colors.jetBlack};
        border-radius: 5px;
        margin: 8px 0;
        padding: 8px;
        width: 100%;
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

export const Register = styled.p`
    display:flex;
    justify-content: center;
    gap: 8px;
    color: ${colors.paleSky};
    font-weight: bold;
    margin-top: 24px;
    font-size: 1.5em;
    

    a {
        color: ${colors.carrotOrange};
        text-decoration: none;
    }
`

export const TogglePasswordBtn = styled.button`
    position: absolute;
    right: 12px;
    top: 50%;
    background: transparent;
    border: none;
    color: ${colors.darkSlateGrey};
    font-size: 0.9rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
        color: ${colors.carrotOrange};
    }
`