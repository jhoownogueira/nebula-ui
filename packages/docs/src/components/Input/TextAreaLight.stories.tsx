import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextAreaLight, TextAreaLightProps } from "@orioncore/react";

export default {
  title: "Form/TextArea",
  component: TextAreaLight,
  argTypes: {},
} as Meta;

export const Light: StoryObj<TextAreaLightProps> = (args: any) => (
  <div style={{ width: "250px" }}>
    <TextAreaLight {...args}>
      <label>Label</label>
      <textarea />
    </TextAreaLight>
  </div>
);

Light.args = {
  disabled: false,
  height: "10rem"
};
