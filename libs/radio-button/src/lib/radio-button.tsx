import { ChangeEvent, ChangeEventHandler } from 'react';
import styles from './radio-button.module.scss';
import Image from 'next/image';
import check from './assets/check.png';

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
    <div className={styles['radio-container']}>
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
        {isChecked && (
          <div className={styles['radio-checked']}>
            <Image src={check} alt="checked image" />
          </div>
        )}
      </label>
    </div>
  );
}

export default RadioButton;
