import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from "@nebula-ui/react";

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    variant: 'primary',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
