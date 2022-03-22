import { ChangeEvent, useState } from 'react';
import styles from './slider.module.scss';

export interface sliderLegend {
  isText: boolean;
  data: string[];
}

export type sliderSizes = 'sm' | 'md' | 'lg';

export type sliderColors = 'orange-slider' | 'gray-slider' | 'blue-slider';

export interface SliderProps {
  min?: number;
  max: number;
  defaultVal?: number;
  sliderLegends?: sliderLegend;
  stepDivisions?: number;
  sliderLength?: sliderSizes;
  sliderColor?: sliderColors;
}

const textSliderLegends: sliderLegend = {
  isText: true,
  data: [
    'Not at all',
    'Very less',
    'Barely',
    'Not much',
    'Just about enough',
    'Absolutely',
    'Very much so',
  ],
};

export const emojiSliderLegends: sliderLegend = {
  isText: false,
  data: [
    'https://cdn.shopify.com/s/files/1/1061/1924/files/Very_Angry_Emoji_60x60.png?2976903553660223024',
    'https://cdn.shopify.com/s/files/1/1061/1924/files/Disappointed_Face_Emoji_60x60.png?8026536574188759287',
    'https://cdn.shopify.com/s/files/1/1061/1924/files/Expressionless_Face_Emoji_60x60.png?8026536574188759287',
    'https://cdn.shopify.com/s/files/1/1061/1924/files/Kissing_Face_Emoji_60x60.png?8026536574188759287',
    'https://cdn.shopify.com/s/files/1/1061/1924/files/Slightly_Smiling_Face_Emoji_Icon_60x60.png?16228697460559734940',
    'https://cdn.shopify.com/s/files/1/1061/1924/files/Smiling_Emoji_with_Smiling_Eyes_Icon_60x60.png?16228697460559734940',
  ],
};

export function Slider({
  sliderLegends = textSliderLegends,
  min = 0,
  max = 6,
  defaultVal = 3,
  stepDivisions = 10,
  sliderLength = 'md',
  sliderColor = 'gray-slider',
}: SliderProps) {
  const [sliderVal, setSliderVal] = useState(defaultVal);

  const handleChange = (e: ChangeEvent<any>): void => {
    setSliderVal(e.target.value);
  };

  const maxLength = sliderLegends.data.length - 1;
  max = Math.min(max, maxLength);

  const previewValue = sliderLegends.isText ? (
    <h2 className={styles['value-text']}>
      {sliderLegends.data[Math.round(sliderVal)]}
    </h2>
  ) : (
    <img
      className={styles['preview-value']}
      src={sliderLegends.data[Math.round(sliderVal)]}
    />
  );

  const rangeIndicators = sliderLegends.isText ? (
    <>
      <p>{sliderLegends.data[min]}</p>
      <p>{sliderLegends.data[max]}</p>
    </>
  ) : (
    <>
      <img src={sliderLegends.data[min]} />
      <img src={sliderLegends.data[max]} />
    </>
  );

  return (
    <div className={`${styles[sliderLength]} ${styles['slider-container']}`}>
      {previewValue}
      <input
        className={`${styles[sliderColor]} ${styles['slider']}`}
        type="range"
        min={min}
        max={max}
        onChange={handleChange}
        value={sliderVal}
        step={1 / stepDivisions}
      />
      <small className={styles['range-indicators']}>{rangeIndicators}</small>
    </div>
  );
}

export default Slider;
