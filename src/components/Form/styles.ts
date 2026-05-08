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
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 16px 0;

  label {
    font-size: 2em;
    font-weight: bold;
    color: ${colors.paleSky};
  }

  input {
    background-color: ${colors.paleSky};
    border: 2px solid ${colors.paleSky};
    color: ${colors.jetBlack};
    border-radius: 5px;
    margin: 8px 0;
    padding: 8px;
    width: 100%;
    }
`

export const FormBtn = styled.button`
  width: 50%;
  padding: 8px;
  background-color: ${colors.carrotOrange};
  border: 2px solid ${colors.carrotOrange};
  border-radius: 25px;
  color: ${colors.paleSky};
  font-size: 1.5em;
  font-weight: bold;
`

export const Register = styled.p`
  display:flex;
  justify-content: center;
  color: ${colors.paleSky};
  font-weight: bold;
  margin-top: 24px;
  font-size: 1.5em;
  

  a {
    color: ${colors.carrotOrange};
  }

  Link {
    color: ${colors.cerulean};
  }
`