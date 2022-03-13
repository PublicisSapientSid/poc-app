import styles from './index.module.scss';
import { Slider } from '@poc/slider';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <Slider max={6} defaultVal={2} stepDivisions={10} />
    </div>
  );
}

export default Index;
