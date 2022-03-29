import styles from './index.module.scss';
import { MultipleChoiceQuestion } from '../components/molecules/MultipleChoiceQuestion';
import { HeightInput } from '../components/molecules/HeightInput';
import { SleepQuality } from '../components/molecules/SleepQuality';

export function Index() {
  return (
    <div className={styles.page}>
      <SleepQuality />
      <MultipleChoiceQuestion />
      <HeightInput />
    </div>
  );
}

export default Index;
