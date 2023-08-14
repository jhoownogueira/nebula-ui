import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextAreaDark, TextAreaDarkProps } from "@orioncore/react";

export default {
  title: "Form/TextArea",
  component: TextAreaDark,
  argTypes: {},
} as Meta;

export const Dark: StoryObj<TextAreaDarkProps> = (args: any) => (
  <div style={{ width: "250px" }}>
    <TextAreaDark {...args}>
      <label>Label</label>
      <textarea />
    </TextAreaDark>
  </div>
);

Dark.args = {
  disabled: false,
  height: "10rem"
};
