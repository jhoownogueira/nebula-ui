import styled from "styled-components";
import {
  colors,
  fonts,
} from "@orioncore/tokens";

interface InputLightContainerProps {
  disabled?: boolean
}

export const InputLightContainer = styled.fieldset<InputLightContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  border: none;
  outline: none;

  label {
    font-size: 0.875rem;
    font-weight: 400;
    font-family: ${fonts.default};
    color: ${props => props.disabled ? colors.gray_300 : colors.gray_900 };
  }

  input {
    width: 100%;
    height: 2.5rem;
    padding: 0 1rem;
    border-radius: 6px;
    outline: none;
    transition: all 0.2s;
    border: 1px solid ${props => props.disabled ? colors.gray_200 : colors.gray_700 };
    background: ${props => props.disabled ? colors.gray_200 : colors.orion_white };
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer' };
    color: ${colors.orion_black};
    font-family: ${fonts.default};
    &:placeholder {
      color: ${props => props.disabled ? colors.orion_white : colors.gray_300 };
    }

    &:focus {
      border: 1px solid ${colors.orion_black};
    }

  }

  @media (max-width: 480px) {
    input {
      font-size: 16px;
    }
  }
`;
