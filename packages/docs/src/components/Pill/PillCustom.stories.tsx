import type { Meta, StoryObj } from "@storybook/react";
import { PillCustom, PillCustomProps } from "@orioncore/react";

export default {
  title: "Pill/PillCustom",
  component: PillCustom,
  args: {
    text: "Aprovado",
    color: "orion_white",
    backgroundColor: "sup_forest_green100",
    borderColor: "sup_forest_green100",
  },
  argTypes: {
    color: {
      options: [
        "orion_black",
        "orion_white",
        "sup_solar_yellow100",
        "sup_ruby_pink100",
        "sup_forest_green100",
        "sup_fire_red100",
        "sup_mist_aquamarine100",
        "sup_rustic_bronze100",
        "sup_eletric_blue100",
        "sup_amethyst_purple100",
        "sup_mocha_brown100",
      ],
      control: {
        type: "select",
      },
    },
    backgroundColor: {
      options: [
        "orion_black",
        "orion_white",
        "sup_solar_yellow100",
        "sup_ruby_pink100",
        "sup_forest_green100",
        "sup_fire_red100",
        "sup_mist_aquamarine100",
        "sup_rustic_bronze100",
        "sup_eletric_blue100",
        "sup_amethyst_purple100",
        "sup_mocha_brown100",
      ],
      control: {
        type: "select",
      },
    },
    borderColor: {
      options: [
        "orion_black",
        "orion_white",
        "sup_solar_yellow100",
        "sup_ruby_pink100",
        "sup_forest_green100",
        "sup_fire_red100",
        "sup_mist_aquamarine100",
        "sup_rustic_bronze100",
        "sup_eletric_blue100",
        "sup_amethyst_purple100",
        "sup_mocha_brown100",
      ],
      control: {
        type: "select",
      },
    },
  },
} as Meta<PillCustomProps>;

export const CustomPill: StoryObj<PillCustomProps> = {};
