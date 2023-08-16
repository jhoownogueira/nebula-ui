import { ReactNode } from "react";
import {
  StyledPickerDate,
  GlobalDatePickerStyles,
  FlexContainer,
} from "./styles";
import { ptBR } from "date-fns/locale";

export interface DateRangePickerDarkProps {
  $startDate: Date | null;
  $endDate: Date | null;
  $icon: ReactNode;
  $onChangeStart: (date: Date) => void;
  $onChangeEnd: (date: Date) => void;
  $flex: 'row' | 'column';
}

export function DateRangePickerDark({
  $startDate,
  $endDate,
  $icon,
  $onChangeStart,
  $onChangeEnd,
  $flex,
}: DateRangePickerDarkProps) {
  return (
    <>
      <GlobalDatePickerStyles />
      <FlexContainer $flex={$flex}>
        <fieldset className="datepicker">
          <label>Data inicial</label>
          <StyledPickerDate
            locale={ptBR}
            selected={$startDate}
            onChange={$onChangeStart}
            selectsStart
            startDate={$startDate}
            endDate={$endDate}
            dateFormat="dd/MM/yyyy"
          />
          {$icon}
        </fieldset>
        <fieldset className="datepicker">
          <label>Data final</label>
          <StyledPickerDate
            locale={ptBR}
            selected={$endDate}
            onChange={$onChangeEnd}
            selectsEnd
            startDate={$startDate}
            endDate={$endDate}
            minDate={$startDate}
            dateFormat="dd/MM/yyyy"
          />
          {$icon}
        </fieldset>
      </FlexContainer>
    </>
  );
}
DateRangePickerDark.displayName = "DateRangePickerDark";
