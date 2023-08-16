import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DateRangePickerDark } from "@orioncore/react";
import { CalendarBlank } from "@phosphor-icons/react";

export default {
  title: "Form/DatePicker",
  component: DateRangePickerDark,
  args: {
    $flex: "row",
  },
  argTypes: {
    $flex: {
      options: ["row", "column"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta;

export const DarkDateRangePicker: StoryObj = (args: any) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const handleChangeStart = (
    date: Date | [Date | null, Date | null] | null
  ) => {
    setStartDate(date as Date);
  };
  const handleChangeEnd = (date: Date | [Date | null, Date | null] | null) => {
    setEndDate(date as Date);
  };
  return (
    <div style={{ width: "350px" }}>
      <DateRangePickerDark
        $icon={<CalendarBlank size={20} />}
        $startDate={startDate}
        $endDate={endDate}
        $onChangeStart={handleChangeStart}
        $onChangeEnd={handleChangeEnd}
        {...args}
      />
    </div>
  );
};

DarkDateRangePicker.args = {
  $icon: <CalendarBlank size={20} />,
  $startDate: new Date(),
  $endDate: new Date(),
  $handleChangeStart: (date: Date | [Date | null, Date | null] | null) => {
    console.log(date);
  },
  $handleChangeEnd: (date: Date | [Date | null, Date | null] | null) => {
    console.log(date);
  },
};