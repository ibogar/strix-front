import styled from "styled-components"
import { colors } from "../../styles"

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