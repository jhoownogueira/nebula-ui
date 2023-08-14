import type { Meta, StoryObj } from "@storybook/react";
import { CustomButton, CustomButtonProps } from "@orioncore/react";

export default {
  title: "Form/Button",
  component: CustomButton,
  args: {
    variantRadius: "md",
    variantSize: "md",
    children: "Custom Button",
    disabled: false,
    wFull: false,
    color: '#fff',
    backgroundColor: '#0f34da'
  },
  argTypes: {
    variantRadius: {
      options: ["px", "xs", "sm", "md", "lg", "full"],
      control: {
        type: "inline-radio",
      },
    },
    variantSize: {
      options: ["xs", "sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<CustomButtonProps>;

export const Custom: StoryObj<CustomButtonProps> = {};
