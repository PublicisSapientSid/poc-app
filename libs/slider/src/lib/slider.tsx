import { ChangeEvent, useState } from 'react';
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
  divisions?: number;
}

const defaultSliderLegends: sliderLegend = {
  0: 'Not at all',
  1: 'Very less',
  2: 'Barely',
  3: 'Not much',
  4: 'Just about enough',
  5: 'Absolutely',
  6: 'Very much so',
};

export function Slider({
  sliderLegends = defaultSliderLegends,
  min = 0,
  max = 6,
  defaultVal = 3,
  divisions = 10,
}: SliderProps) {
  const [sliderVal, setSliderVal] = useState(defaultVal);

  const handleChange = (e: ChangeEvent<any>) => {
    setSliderVal(e.target.value);
  };

  const maxLength = Object.keys(sliderLegends).length - 1;
  max = Math.min(max, maxLength);

  return (
    <div className={styles['slider-container']}>
      <h2 className={styles['value-text']}>
        {sliderLegends[Math.round(sliderVal)]}
      </h2>
      <input
        className={styles['slider']}
        type="range"
        min={min}
        max={max}
        onChange={handleChange}
        value={sliderVal}
        step={1 / divisions}
      />
      <small className={styles['range-indicators']}>
        <p>{sliderLegends[min]}</p>
        <p>{sliderLegends[max]}</p>
      </small>
    </div>
  );
}

export default Slider;
