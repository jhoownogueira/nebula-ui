import type { Meta, StoryObj } from '@storybook/react';
import { SecondaryButton, SecondaryButtonProps } from "@orioncore/react";

export default {
  title: 'Form/Button',
  component: SecondaryButton,
  args: {
    variantRadius: 'md',
    variantSize: 'md'
  },
  argTypes: {
    variantRadius: {
      options: ['px', 'xs', 'sm', 'md', 'lg', 'full'],
      control: {
        type: 'inline-radio',
      },
    },
    variantSize: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<SecondaryButtonProps>

export const Secondary: StoryObj<SecondaryButtonProps> = {}
