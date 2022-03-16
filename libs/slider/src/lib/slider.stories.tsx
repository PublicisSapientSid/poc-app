import { Story, Meta } from '@storybook/react';
import { emojiSliderLegends, Slider, SliderProps } from './slider';

export default {
  component: Slider,
  title: 'Slider',
  // argTypes: { handleChange: { action: 'changed' } },
} as Meta;

const Template: Story<SliderProps> = (args) => <Slider {...args} />;

export const MaxExceededRange = Template.bind({});
MaxExceededRange.args = {
  max: 100,
};

export const MaxLowerRange = Template.bind({});
MaxLowerRange.args = {
  max: 4,
};

export const OrangeSlider = Template.bind({});
OrangeSlider.args = {
  sliderColor: 'orange-slider',
  sliderLength: 'sm',
};

export const ChoppySlider = Template.bind({});
ChoppySlider.args = {
  stepDivisions: 1,
  sliderColor: 'blue-slider',
  sliderLength: 'lg',
};

export const EmojiSlider = Template.bind({});
EmojiSlider.args = {
  sliderLength: 'sm',
  sliderLegends: emojiSliderLegends,
};
