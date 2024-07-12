import { Meta, Story } from '@storybook/react';
import Input, { InputProps } from './Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    onChange: { action: 'changed' }, 
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const TextType = Template.bind({});
TextType.args = {
  type: 'text',
  placeholder: 'Enter the text',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  placeholder: 'Enter the password',
};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  placeholder: 'Enter Email address..',
};
