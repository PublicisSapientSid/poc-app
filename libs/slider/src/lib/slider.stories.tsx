import { Story, Meta } from '@storybook/react';
import { Slider } from './slider';

export default {
  component: Slider,
  title: 'Slider',
  argTypes: { handleChange: { action: 'changed' } },
} as Meta;

const Template: Story = (args) => <Slider max={args['max']} {...args} />;

export const MaxExceededRange = Template.bind({});
MaxExceededRange.args = {
  max: 100,
};

export const MaxLowerRange = Template.bind({});
MaxLowerRange.args = {
  max: 4,
};
