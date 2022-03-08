import { Story, Meta } from '@storybook/react';
import { Slider } from './slider';

export default {
  component: Slider,
  title: 'Slider',
} as Meta;

const Template: Story = (args) => <Slider {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
