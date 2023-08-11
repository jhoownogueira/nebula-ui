import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PrimaryButton, PrimaryButtonProps } from "@orioncore/react";
import { Planet } from "@phosphor-icons/react";

export default {
  title: "Form/Button",
  component: PrimaryButton,
  args: {
    variantRadius: "md",
    variantSize: "md",
    disabled: false,
    children: (
      <>
        <Planet size={20} /> <span>Primary Button</span>
      </>
    ),
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
} as Meta<PrimaryButtonProps>;

export const Primary: StoryObj<PrimaryButtonProps> = {};
