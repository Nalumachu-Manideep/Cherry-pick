/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import CustomButton, { CustomButtonProps } from '.';

export default {
  title: 'CustomButton',
  component: CustomButton,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      options: ['contained', 'text', 'outlined'],
      control: { type: 'radio' },
    },
    color: {
      options: [ 'primary', 'secondary','success'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<CustomButtonProps> = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'contained',
  color: 'primary',
  label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'contained',
  color: 'secondary',
  label: 'Secondary',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'contained',
  color: 'primary', // Ensure color is defined
  style: { backgroundColor: 'green', color: 'white' }, // Style object for custom styles
  label: 'Success',
};

export const TextButton = Template.bind({});
TextButton.args = {
  variant: 'text',
  color: 'default', // Ensure color is defined
  label: 'Text Button',
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  variant: 'outlined',
  color: 'default', // Ensure color is defined
  label: 'Outlined Button',
};
