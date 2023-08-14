import type { Meta, StoryObj } from "@storybook/react";
import { TertiaryButton, TertiaryButtonProps } from "@orioncore/react";

export default {
  title: "Form/Button",
  component: TertiaryButton,
  args: {
    variantRadius: "md",
    variantSize: "md",
    children: "Tertiary Button",
    disabled: false,
    wFull: false,
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
} as Meta<TertiaryButtonProps>;

export const Tertiary: StoryObj<TertiaryButtonProps> = {};
