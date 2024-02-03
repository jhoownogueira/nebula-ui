import type { Meta, StoryObj } from "@storybook/react";
import { OutlineButton, OutlineButtonProps } from "@orioncore/react";

export default {
  title: "Form/Button",
  component: OutlineButton,
  args: {
    $variantRadius: "md",
    $variantSize: "md",
    children: "Outline Button",
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
  },
} as Meta<OutlineButtonProps>;

export const Outline: StoryObj<OutlineButtonProps> = {};
