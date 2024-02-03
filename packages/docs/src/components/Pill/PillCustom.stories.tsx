import type { Meta, StoryObj } from "@storybook/react";
import { PillCustom, PillCustomProps } from "@orioncore/react";

export default {
  title: "Pill/PillCustom",
  component: PillCustom,
  args: {
    $text: "Aprovado",
    $color: "flash_white",
    $backgroundColor: "success",
    $borderColor: "success",
  },
  argTypes: {
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
    $borderColor: {
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
} as Meta<PillCustomProps>;

export const CustomPill: StoryObj<PillCustomProps> = {};
