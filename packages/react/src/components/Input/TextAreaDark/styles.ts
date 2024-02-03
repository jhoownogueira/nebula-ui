import styled from "styled-components";
import { colors, fonts } from "@orioncore/tokens";

interface TextAreaDarkContainerProps {
  disabled?: boolean;
  height?: string;
}

export const TextAreaDarkContainer = styled.fieldset<TextAreaDarkContainerProps>`
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
    color: ${(props) => (props.disabled ? colors.gray_700 : colors.gray_300)};
  }

  textarea {
    width: 100%;
    height: ${(props) => (props.height ? props.height : "10rem")};
    padding: 1rem;
    border-radius: 6px;
    outline: none;
    transition: all 0.2s;
    border: 1px solid
      ${(props) => (props.disabled ? colors.gray_900 : colors.gray_700)};
    background: ${(props) =>
      props.disabled ? colors.gray_900 : colors.flash_black};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "text")};
    color: ${colors.flash_white};
    font-family: ${fonts.default};
    resize: none;

    &:placeholder {
      color: ${colors.gray_300};
    }

    &:focus {
      border: 1px solid ${colors.flash_white};
    }
  }

  @media (max-width: 480px) {
    textarea {
      font-size: 16px;
    }
  }
`;
