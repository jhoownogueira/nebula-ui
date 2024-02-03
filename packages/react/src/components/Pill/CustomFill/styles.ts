import { colors, fonts } from "@orioncore/tokens";
import { styled } from "styled-components";

type ColorKeys = keyof typeof colors;

interface PillCustomContainerProps {
  $color: ColorKeys;
  $backgroundColor: ColorKeys;
  $borderColor: ColorKeys;
}

export const PillCustomContainer = styled.div<PillCustomContainerProps>`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
  font-family: ${fonts.default};

  span {
    white-space: nowrap;
    font-size: 0.875rem;
    background: ${(props) =>
      props.$backgroundColor
        ? colors[props.$backgroundColor]
        : colors.flash_white};
    border: 1px solid
      ${(props) =>
        props.$borderColor ? colors[props.$borderColor] : colors.flash_black};
    color: ${(props) =>
      props.$color ? colors[props.$color] : colors.flash_black};
    padding: 0.2rem 0.5rem;
    border-radius: 999px;
  }
`;
