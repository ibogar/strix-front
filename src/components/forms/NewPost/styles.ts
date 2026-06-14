import styled from "styled-components"
import { colors } from "../../../styles"

export const NewPostContainer = styled.form`
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

export const NewPostContent = styled.textarea`
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

export const NewBtn = styled.button`
  align-self: flex-end;
  padding: 8px 24px;
  margin-left: 8px;
  background-color: ${colors.carrotOrange};
  color: ${colors.jetBlack};
  border: 2px solid ${colors.carrotOrange};
  border-radius: 25px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    box-shadow: 4px 4px ${colors.cerulean};
  }
`