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
    $backgroundColor: {
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
} as Meta<CustomButtonProps>;

export const Custom: StoryObj<CustomButtonProps> = {};
