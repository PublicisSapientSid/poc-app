import { ChangeEvent } from 'react';
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
  isOutlined?: boolean;
  buttonSize?: 'sm' | 'md' | 'lg';
}

export function RadioButton({
  label,
  val,
  name,
  isChecked,
  handleChange,
  buttonSize = 'lg',
  isOutlined = true,
}: RadioButtonProps) {
  return (
    <div className={`${styles['radio-container']} ${styles[buttonSize]}`}>
      <input
        type="radio"
        name={name}
        value={val}
        checked={isChecked}
        id={String(val)}
        className={styles['radio-toolbar']}
        onChange={handleChange}
      />
      <label
        className={`${styles['radio-label']} ${
          isOutlined ? '' : styles['non-outlined']
        }`}
        htmlFor={String(val)}
      >
        {label}
        {isChecked && (
          <div className={styles['radio-checked']}>
            <Image src={check} height={24} width={24} alt="checked image" />
          </div>
        )}
      </label>
    </div>
  );
}

export default RadioButton;
