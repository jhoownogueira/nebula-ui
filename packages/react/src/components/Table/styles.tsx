import styled from "styled-components";
import {
  colors,
  radii,
  sizes,
  fontSizes,
  fontWeights,
  fonts,
} from "@orioncore/tokens";

interface RowTableBodyContainerProps {
  hoverColor?: string;
}

export const TableRootContainer = styled.div`
  width: 100%;
`;

export const TableHeaderContainer = styled.div`
  width: 100%;
  table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    font-family: ${fonts.default};
    thead {
      display: block;
      background: ${colors.gray_300};
      border-radius: 8px 8px 0 0;
      color: ${colors.gray_900};
      border: 1px solid ${colors.gray_300};
      font-size: 0.875rem;
      border-bottom: 0;
      tr {
        width: 100%;
        display: flex;
        align-items: center;
        height: 2.5rem;
        th {
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0 0 0 1rem;
          button.th-flex {
            border: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${colors.gray_900};
            font-size: 0.875rem;
            font-weight: 700;
            background: transparent;
          }
        }
      }
    }
  }
`;

export const TableBodyContainer = styled.div`
  width: 100%;
  table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    border-top: 1px solid ${colors.gray_300};
    font-family: ${fonts.default};
    tbody {
      display: block;
      max-height: 328px;
      overflow-y: auto;
      padding-right: 0.5rem;
      tr {
        td {
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0 0 0 1rem;
        }
      }
    }
  }
`;

export const TableFooterContainer = styled.div`
  width: 100%;
  height: 16px;
  background: ${colors.gray_200};
  border-radius: 0 0 8px 8px;
`;

export const RowTableBodyContainer = styled.tr<RowTableBodyContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  height: 2.5rem;
  background: ${colors.orion_white};
  border-bottom: 1px solid ${colors.gray_300};
  color: ${colors.gray_900};
  font-size: 0.875rem;
  cursor: pointer;
  height: 3.5rem;
  &:hover {
    background: ${props => props.hoverColor ? props.hoverColor : colors.gray_300};
    transition: all 0.2s;
  }
`;
