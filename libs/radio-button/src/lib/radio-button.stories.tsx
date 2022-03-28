import { Story, Meta } from '@storybook/react';
import { RadioButton, RadioButtonProps } from './radio-button';

export default {
  component: RadioButton,
  title: 'RadioButton',
} as Meta;

const Template: Story<RadioButtonProps> = (args) => (
  <RadioButton
    {...args}
    name="station"
    val="kharagpur"
    label="Kharagpur"
    handleChange={() => {
      return;
    }}
  />
);

export const SmallButton = Template.bind({});
SmallButton.args = {
  buttonSize: 'sm',
  isChecked: true,
};

export const MediumUnselectedButton = Template.bind({});
MediumUnselectedButton.args = {
  buttonSize: 'md',
  isChecked: false,
};

export const LargeNonOutlinedButton = Template.bind({});
MediumUnselectedButton.args = {
  isChecked: true,
  isOutlined: false,
};
