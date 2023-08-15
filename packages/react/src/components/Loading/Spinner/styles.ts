import { colors } from "@orioncore/tokens";
import styled from "styled-components";

export const SpinnerLoadingContainer = styled.span`
  width: 32px;
  height: 32px;
  border: 2px solid ${colors.primary};
  border-bottom-color: ${colors.primary_ghost};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
