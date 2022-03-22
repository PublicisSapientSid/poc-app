import { ChangeEvent, ChangeEventHandler } from 'react';
import styles from './radio-button.module.scss';

/* eslint-disable-next-line */
export interface RadioButtonProps {
  label: string;
  val: string | number;
  name: string;
  isChecked: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function RadioButton({
  label,
  val,
  name,
  isChecked,
  handleChange,
}: RadioButtonProps) {
  return (
    <>
      <input
        type="radio"
        name={name}
        value={val}
        checked={isChecked}
        id={String(val)}
        className={styles['radio-toolbar']}
        onChange={handleChange}
      />
      <label className={styles['radio-label']} htmlFor={String(val)}>
        {label}
      </label>
    </>
  );
}

export default RadioButton;
