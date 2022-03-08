import { useState } from 'react';
import styles from './slider.module.scss';

export type sliderLegend = {
  [range: number]: string;
};

/* eslint-disable-next-line */
export interface SliderProps {
  min?: number;
  max: number;
  defaultVal?: number;
  sliderLegends?: sliderLegend;
}

const defaultSliderLegends: sliderLegend = {
  0: 'Not so good',
  1: 'Below average',
  2: 'Average',
  3: 'Okay',
  4: 'Good',
  5: 'Pretty good',
  6: 'Awesome',
};

export function Slider({
  sliderLegends = defaultSliderLegends,
  min = 0,
  max = 6,
  defaultVal = 3,
}: SliderProps) {
  const [sliderVal, setSliderVal] = useState(defaultVal);

  const handleChange = (e) => {
    setSliderVal(e.target.value);
  };

  return (
    <div className={styles['container']}>
      <h1>Welcome to Slider!</h1>
      <p>{sliderLegends[sliderVal]}</p>
      <input
        type="range"
        min={min}
        max={max}
        onChange={handleChange}
        value={sliderVal}
      />
    </div>
  );
}

export default Slider;
