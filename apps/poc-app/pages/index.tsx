import styles from './index.module.scss';
import { Slider } from '@poc/slider';
import { MultipleChoiceQuestion } from '../components/MultipleChoiceQuestion';
import { HeightInput } from '../components/HeightInput';

export function Index() {
  return (
    <div className={styles.page}>
      <div className={styles['slider']}>
        <Slider max={6} defaultVal={2} stepDivisions={10} />
      </div>
      <MultipleChoiceQuestion />
      <HeightInput />
    </div>
  );
}

export default Index;
