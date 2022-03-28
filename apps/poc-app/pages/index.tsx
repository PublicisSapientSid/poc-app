import styles from './index.module.scss';
import { Slider } from '@poc/slider';
import { ChangeEvent, useState } from 'react';
import { MultipleChoiceQuestion } from '../components/MultipleChoiceQuestion';

export function Index() {
  return (
    <div className={styles.page}>
      <div className={styles['slider']}>
        <Slider max={6} defaultVal={2} stepDivisions={10} />
      </div>
      <MultipleChoiceQuestion />
    </div>
  );
}

export default Index;
