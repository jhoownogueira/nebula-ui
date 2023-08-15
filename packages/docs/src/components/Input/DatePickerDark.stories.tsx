import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DatePickerDark } from "@orioncore/react";
import { CalendarBlank } from "@phosphor-icons/react";

export default {
  title: "Form/DatePicker",
  component: DatePickerDark,
} as Meta;

export const DarkDatePicker: StoryObj = (args: any) => {
  const [date, setDate] = useState<Date | null>(new Date());
  const handleChangeDate = (date: Date | [Date | null, Date | null] | null) => {
    setDate(date as Date);
  };
  return (
    <div style={{width: '350px'}}>
      <DatePickerDark
        onChange={handleChangeDate}
        date={date}
        icon={<CalendarBlank size={20} />}
      />
    </div>
  );
};

DarkDatePicker.args = {
  icon: <CalendarBlank size={20} />,
  date: new Date(),
  onChange: (date: Date | [Date | null, Date | null] | null) => {
    console.log(date);
  }
};
