import { Meta, Story } from '@storybook/react';
import Label, { LabelProps } from './Label';

export default {
  title: 'Label',   
  component: Label, 
  argTypes: {
    onClick: { action: 'clicked' }, 
  },
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  htmlFor: 'basic-input',
  text: 'Basic Label',
};

export const ForInput = Template.bind({});
ForInput.args = {
  htmlFor: 'input-id',
  text: 'Label for Input',
};

export const WithAdditionalProps = Template.bind({});
WithAdditionalProps.args = {
  htmlFor: 'styled-input',
  text: 'Styled Label',
  style: { color: 'blue', fontWeight: 'bold' },
};
