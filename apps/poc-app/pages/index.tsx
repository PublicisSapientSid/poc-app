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

  const mcqValues: {
    formControlName: string;
    formValues: {
      label: string;
      value: string;
    }[];
  } = {
    formControlName: 'fruits',
    formValues: [
      {
        label: 'Apple',
        value: 'apple',
      },
      {
        label: 'Mango',
        value: 'mango',
      },
      {
        label: 'Orange',
        value: 'orange',
      },
    ],
  };

  return (
    <div className={styles.page}>
      <div className={styles['slider']}>
        <Slider max={6} defaultVal={2} stepDivisions={10} />
      </div>
      <div className={styles['radio-button'] + ' button-sm'}>
        {mcqValues.formValues.map((mcq) => (
          <RadioButton
            name={mcqValues.formControlName}
            val={mcq.value}
            isChecked={radioValue === mcq.value}
            label={mcq.label}
            handleChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
}

export default Index;
