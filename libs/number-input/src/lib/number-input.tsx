import styles from './number-input.module.scss';

/* eslint-disable-next-line */
export interface NumberInputProps {}

export function NumberInput(props: NumberInputProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NumberInput!</h1>
    </div>
  );
}

export default NumberInput;
