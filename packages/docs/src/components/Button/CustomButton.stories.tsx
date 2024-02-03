import type { Meta, StoryObj } from "@storybook/react";
import { CustomButton, CustomButtonProps } from "@orioncore/react";

export default {
  title: "Form/Button",
  component: CustomButton,
  args: {
    $variantRadius: "md",
    $variantSize: "md",
    children: "Custom Button",
    disabled: false,
    $wFull: false,
  },
  argTypes: {
    $variantRadius: {
      options: ["px", "xs", "sm", "md", "lg", "full"],
      control: {
        type: "inline-radio",
      },
    },
    $variantSize: {
      options: ["xs", "sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
    $color: {
      options: [
        "flash_black",
        "flash_white",
        "success",
        "alert",
        "info",
        "highlight",
      ],
      control: {
        type: "select",
      },
    },
    $backgroundColor: {
      options: [
        "flash_black",
        "flash_white",
        "success",
        "alert",
        "info",
        "highlight",
      ],
      control: {
        type: "select",
      },
    },
  },
} as Meta<CustomButtonProps>;

export const Custom: StoryObj<CustomButtonProps> = {};
