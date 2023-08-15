import { createGlobalStyle } from "styled-components";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import { colors, fonts } from "@orioncore/tokens";

interface FlexContainerProps {
  flexRow: boolean;
}

export const FlexContainer = styled.div<FlexContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) =>
    props.flexRow? "row" : "column"};
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const StyledPickerDate = styled(DatePicker)<ReactDatePickerProps>`
  box-sizing: border-box;
  width: 100%;
  height: 2.5rem;
  padding: 0 1rem;
  border-radius: 6px;
  outline: none;
  transition: all 0.2s;
  border: 1px solid ${colors.gray_300};
  background: ${colors.orion_black};
  color: ${colors.orion_white};
  cursor: pointer;
  font-family: ${fonts.default};

  &:placeholder {
    color: ${colors.gray_300};
  }

  &:focus {
    border: 1px solid ${colors.orion_white};
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const GlobalDatePickerStyles = createGlobalStyle`
  fieldset.datepicker {
    box-sizing: border-box;
      border: none;
      outline: none;
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      padding: 0;
      margin: 0;
      
      label {
        width: 100%;
        font-size: 0.875rem;
        color: ${colors.gray_200};
        font-family: ${fonts.default};
      }
      
      svg {
        position: absolute;
        top: 1.85rem;
        right: 0.75rem;
        color: ${colors.orion_white};
      }
  }
  .react-datepicker-wrapper {
    width: 100%;
  }
  .react-datepicker {
    border-radius: 0;
      .react-datepicker__month-container {
        .react-datepicker__header  {
          border-radius: 0;
          background: ${colors.orion_black};

          .react-datepicker__current-month {
            color: ${colors.orion_white};
            font-family: ${fonts.default};
            font-size: 0.75rem;
            text-transform: capitalize;
          }

          .react-datepicker__day-name {
            color: ${colors.orion_white};
            font-family: ${fonts.default};
          }
        }

        .react-datepicker__month {
          .react-datepicker__week {
            .react-datepicker__day {
              font-family: ${fonts.default};

              &[aria-selected="true"] {
                background: ${colors.primary};
              }
            }
          }
        }
      }
  }
`;
