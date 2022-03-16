import { render, screen } from '@testing-library/react';

import Slider from './slider';

describe('Slider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Slider max={8} />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a pre-selected value with improper max value', () => {
    const sliderComponent = render(<Slider max={100} />);
    expect(
      sliderComponent.container.getElementsByClassName('slider-container')
    ).toContain('Not much');
  });
});
