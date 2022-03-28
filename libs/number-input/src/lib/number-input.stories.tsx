import { Story, Meta } from '@storybook/react';
import { NumberInput, NumberInputProps } from './number-input';

export default {
  component: NumberInput,
  title: 'NumberInput',
} as Meta;

const Template: Story<NumberInputProps> = (args) => <NumberInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  dataSet: [
    {
      min: 0,
      max: 10,
      label: 'Feet (ft)',
      value: 3,
    },
    {
      min: 2,
      max: 8,
      label: 'Inches (in)',
      value: 7,
    },
  ],
};
