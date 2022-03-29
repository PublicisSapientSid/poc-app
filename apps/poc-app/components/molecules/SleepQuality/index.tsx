import styles from './sleep-quality.module.scss';
import { Slider } from '@poc/slider';

export const SleepQuality = () => {
  return (
    <div className={styles['slider']}>
      <h1 className={styles['slider-question']}>
        How do you feel about the quantity of your sleep?
      </h1>
      <Slider max={6} defaultVal={2} stepDivisions={10} />
    </div>
  );
};
