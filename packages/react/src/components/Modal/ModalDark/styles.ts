import styled, { keyframes } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import { colors, radii, fonts, fontSizes } from "@orioncore/tokens";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const fadeInTranslateY = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -150%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

const fadeOutTranslateY = keyframes`
  from {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
  to {
    opacity: 0;
    transform: translate(-50%, -150%);
  }
`;

type ColorKeys = keyof typeof colors;

interface ModalProps {
  $width?: string;
}

interface ModalHeaderProps {
  $iconBgColor?: ColorKeys;
  $iconColor?: ColorKeys;
}

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(1.5px);
  animation: ${fadeIn} 0.2s forwards;

  &[data-state="closed"] {
    animation: ${fadeOut} 0.2s forwards;
  }
`;

export const ModalHeader = styled.header<ModalHeaderProps>`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  font-family: ${fonts.default};
  .withIcon {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.5rem;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.2rem;
      border-radius: ${radii.sm};
      background: ${(props) =>
        props.$iconBgColor ? colors[props.$iconBgColor] : colors.orion_white};

      svg {
        color: ${(props) =>
          props.$iconColor ? colors[props.$iconColor] : colors.orion_black};
      }
    }
    h3 {
      font-size: ${fontSizes.xl};
      color: ${colors.orion_white};
    }
  }
`;

export const ModalTitle = styled(Dialog.Title)`
  font-size: 0;
`;

export const ModalClose = styled(Dialog.Close)`
  overflow: hidden;
  position: relative;
  border: none;
  padding: 0;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background: transparent;
  color: ${colors.gray_200};
  font: inherit;
  text-indent: 100%;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  outline: none;

  &:hover {
    color: ${colors.primary};
  }

  &:before,
  &:after {
    position: absolute;
    top: 15%;
    left: calc(50% - 0.0625em);
    width: 0.125em;
    height: 70%;
    border-radius: 0.125em;
    transform: rotate(45deg);
    background: currentcolor;
    content: "";
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export const ModalContent = styled(Dialog.Content)<ModalProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: ${(props) => (props.$width ? props.$width : "32rem")};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 6px;
  padding: 2rem;
  background: ${colors.orion_black_box};
  animation: ${fadeInTranslateY} 0.2s forwards;
  font-family: ${fonts.default};
  &[data-state="closed"] {
    animation: ${fadeOutTranslateY} 0.2s forwards;
  }
`;
