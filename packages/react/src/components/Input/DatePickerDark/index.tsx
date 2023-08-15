import { ReactNode } from "react";
import { StyledPickerDate, GlobalDatePickerStyles } from "./styles";
import { ptBR } from "date-fns/locale";

export interface DatePickerDarkProps {
  date: Date | null;
  icon: ReactNode;
  onChange: (date: Date) => void;
}

export function DatePickerDark({ date, icon, onChange }: DatePickerDarkProps) {
  return (
    <>
      <GlobalDatePickerStyles />
      <fieldset className="datepicker">
        <label>Data inicial</label>
        <StyledPickerDate
          locale={ptBR}
          selected={date}
          onChange={onChange}
          dateFormat="dd/MM/yyyy"
        />
        {icon}
      </fieldset>
    </>
  );
}
