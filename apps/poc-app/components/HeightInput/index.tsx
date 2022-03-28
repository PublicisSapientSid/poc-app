import { numberData, NumberInput } from '@poc/number-input';
import styles from './HeightInput.module.scss';

const dataSet: numberData[] = [
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
];

export const HeightInput = () => {
  return (
    <div className={styles['height-container']}>
      {' '}
      <NumberInput dataSet={dataSet} />
    </div>
  );
};
