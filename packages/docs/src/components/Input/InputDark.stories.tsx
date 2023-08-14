import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InputDark, InputDarkProps } from "@orioncore/react";

export default {
  title: "Form/Input",
  component: InputDark,
  argTypes: {},
} as Meta;

export const Dark: StoryObj<InputDarkProps> = (args: any) => (
  <div style={{ width: "250px" }}>
    <InputDark {...args}>
      <label>Label</label>
      <input type="text" placeholder="Input Dark" />
    </InputDark>
  </div>
);

Dark.args = {
  disabled: false,
};
