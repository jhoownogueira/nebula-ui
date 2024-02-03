import { colors, fonts } from "@orioncore/tokens";
import styled from "styled-components";

export const PaginationContainer = styled.div`
  width: fit-content;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${fonts.default};

  button.prev-page,
  button.next-page {
    width: 38px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 1px solid ${colors.neutral_100};
    background: transparent;
    color: ${colors.neutral_700};
    cursor: pointer;

    &:hover {
      transition: all 0.2s ease-in-out;
      background: ${colors.neutral_50};
    }
  }

  button.prev-page {
    border-radius: 8px 0 0 8px;
  }

  button.next-page {
    border-radius: 0 8px 8px 0;
  }

  span {
    height: 97%;
    font-size: 0.875rem;
    color: ${colors.neutral_900};
    width: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${colors.neutral_100};
    border-top: 1px solid ${colors.neutral_100};
  }
`;
