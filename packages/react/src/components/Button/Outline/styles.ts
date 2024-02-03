import styled from "styled-components";
import {
  colors,
  radii,
  sizes,
  fontSizes,
  fontWeights,
  fonts,
} from "@orioncore/tokens";

type ColorKeys = keyof typeof colors;

interface ButtonsContainerProps {
  $radius: string;
  $height: string;
  $fontSize: string;
  $paddingSize: string;
  $wFull?: boolean;
  $color: ColorKeys;
}

export const SizeRadius = {
  px: {
    $radius: radii.px,
  },
  xs: {
    $radius: radii.xs,
  },
  sm: {
    $radius: radii.sm,
  },
  md: {
    $radius: radii.md,
  },
  lg: {
    $radius: radii.lg,
  },
  full: {
    $radius: radii.full,
  },
};
export const SizeButton = {
  xs: {
    $height: sizes[6],
    $fontSizes: fontSizes.xs,
    $paddingSize: sizes[2],
  },
  sm: {
    $height: sizes[8],
    $fontSizes: fontSizes.sm,
    $paddingSize: sizes[4],
  },
  md: {
    $height: sizes[10],
    $fontSizes: fontSizes.md,
    $paddingSize: sizes[5],
  },
  lg: {
    $height: sizes[12],
    $fontSizes: fontSizes.lg,
    $paddingSize: sizes[6],
  },
};

export const OutlineButtonContainer = styled.button<ButtonsContainerProps>`
  width: ${(props) => (props.$wFull ? "100%" : "fit-content")};
  height: ${(props) => props.$height};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding-left: ${(props) => props.$paddingSize};
  padding-right: ${(props) => props.$paddingSize};
  border: 1px solid
    ${(props) => (props.$color ? colors[props.$color] : colors.flash_white)};
  background: transparent;
  border-radius: ${(props) => props.$radius};
  font-size: ${(props) => props.$fontSize};
  font-family: ${fonts.default};
  font-weight: ${fontWeights.medium};
  color: ${(props) =>
    props.$color ? colors[props.$color] : colors.flash_white};
  cursor: pointer;
  &:hover {
    transition: all 0.2s;
    filter: invert(0.5);
  }

  &:focus {
    outline: 2px solid ${colors.neutral_100};
  }

  &:disabled {
    background: ${colors.neutral_100};
    color: ${colors.neutral_200};
    border: 1px solid ${colors.neutral_100};
    cursor: not-allowed;
  }
`;
