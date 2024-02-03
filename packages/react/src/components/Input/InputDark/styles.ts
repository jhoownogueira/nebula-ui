import styled from "styled-components";
import { colors, fonts } from "@orioncore/tokens";

interface InputDarkContainerProps {
  disabled?: boolean;
}

export const InputDarkContainer = styled.fieldset<InputDarkContainerProps>`
  position: relative;
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
    color: ${(props) =>
      props.disabled ? colors.neutral_700 : colors.neutral_100};
  }

  input {
    width: 100%;
    height: 2.5rem;
    padding: 0 1rem;
    border-radius: 6px;
    outline: none;
    transition: all 0.2s;
    border: 1px solid
      ${(props) => (props.disabled ? colors.neutral_900 : colors.neutral_700)};
    background: ${(props) =>
      props.disabled ? colors.neutral_900 : colors.flash_black};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "text")};
    color: ${colors.flash_white};
    font-family: ${fonts.default};
    &:placeholder {
      color: ${colors.neutral_100};
    }

    &:focus {
      outline: 1px solid ${colors.flash_white};
    }
  }

  @media (max-width: 480px) {
    input {
      font-size: 16px;
    }
  }
`;
