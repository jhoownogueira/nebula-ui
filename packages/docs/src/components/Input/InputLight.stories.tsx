import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InputLight, InputLightProps } from "@orioncore/react";

export default {
  title: "Form/Input",
  component: InputLight,
  argTypes: {},
} as Meta;

export const Light: StoryObj<InputLightProps> = (args: any) => (
  <div style={{ width: "250px" }}>
    <InputLight {...args}>
      <label>Label</label>
      <input type="text" placeholder="Input Dark" />
    </InputLight>
  </div>
);

Light.args = {
  disabled: false,
};
