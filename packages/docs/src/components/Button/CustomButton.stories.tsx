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
        "sup_solar_yellow100",
        "sup_ruby_pink100",
        "success",
        "sup_fire_red100",
        "sup_mist_aquamarine100",
        "alert",
        "info",
        "highlight",
        "sup_mocha_brown100",
      ],
      control: {
        type: "select",
      },
    },
    $backgroundColor: {
      options: [
        "flash_black",
        "flash_white",
        "sup_solar_yellow100",
        "sup_ruby_pink100",
        "success",
        "sup_fire_red100",
        "sup_mist_aquamarine100",
        "alert",
        "info",
        "highlight",
        "sup_mocha_brown100",
      ],
      control: {
        type: "select",
      },
    },
  },
} as Meta<CustomButtonProps>;

export const Custom: StoryObj<CustomButtonProps> = {};
