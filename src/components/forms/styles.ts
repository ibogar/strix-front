import styled from 'styled-components'
import { colors } from '../../styles'

export const FormContainer = styled.form`
    width: 80%;
    margin: 0 auto;
    padding: 32px 16px;
    background-color: ${colors.darkSlateGrey};
    border: 2px solid ${colors.darkSlateGrey};
    box-shadow: 6px 6px 0 ${colors.cerulean};
    border-radius: 5px;
`

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 16px 0;

    

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

    input[type='password']::-ms-reveal,
    input[type='password']::-ms-clear {
        display: none;
    }

    input[type='password']::-webkit-credentials-auto-fill-button,
    input[type='password']::-webkit-textfield-decoration-container {
        display: none;
    }
`

export const Label = styled.label`
    font-size: 2em;
    font-weight: bold;
    color: ${colors.paleSky};
`

export const InputError = styled.p`
    color: ${colors.scarletFire};
    text-shadow:
    -1px -1px 1px ${colors.jetBlack},
        1px -1px 1px ${colors.jetBlack},
    -1px  1px 1px ${colors.jetBlack},
        1px  1px 1px ${colors.jetBlack};
    font-weight: bold;
    font-size: 16px;
    margin-top: 4px;
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

export const PasswordWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`

export const TogglePasswordBtn = styled.button`
    position: absolute;
    right: 12px;
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

export const FileInput = styled.input`
    display: none;
`

export const FileInputLabel = styled.label`
    display: inline-block;
    width: fit-content;
    padding: 8px 24px;
    margin-top: 8px;

    background-color: ${colors.carrotOrange};

    color: ${colors.jetBlack};

    border-radius: 25px;

    font-weight: bold;

    cursor: pointer;

    transition: 0.2s ease;

    &:hover {
        box-shadow: 4px 4px 0 ${colors.cerulean};
    }
`

export const Filename = styled.p`
    color: ${colors.paleSky};
    margin: 6px 16px 0;
    font-wight: bold;
`