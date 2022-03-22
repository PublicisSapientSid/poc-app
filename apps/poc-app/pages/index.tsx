import styles from './index.module.scss';
import { Slider } from '@poc/slider';
import { RadioButton } from '@poc/radio-button';
import { ChangeEvent, useState } from 'react';

export function Index() {
  const [radioValue, setRadioValue] = useState('apple');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setRadioValue(value);
  };

  return (
    <div className={styles.page}>
      <div className={styles['slider']}>
        <Slider max={6} defaultVal={2} stepDivisions={10} />
      </div>
      <div className={styles['radio-button']}>
        <RadioButton
          name="fruits"
          val="apple"
          isChecked={radioValue === 'apple'}
          label="Apple"
          handleChange={handleChange}
        />
        <RadioButton
          name="fruits"
          val="mango"
          isChecked={radioValue === 'mango'}
          label="Mango"
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Index;
