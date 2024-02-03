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
    $borderColor: {
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
} as Meta<PillCustomProps>;

export const CustomPill: StoryObj<PillCustomProps> = {};
