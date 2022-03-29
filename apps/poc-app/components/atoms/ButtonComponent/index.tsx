import { MouseEvent, MouseEventHandler } from 'react';
import styles from './button-component.module.scss';

export interface ButtonProps {
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
  buttonLabel: string;
}

export const ButtonComponent = ({ buttonLabel, handleClick }: ButtonProps) => {
  return (
    <button className={styles['btn']} onClick={handleClick}>
      {buttonLabel}
    </button>
  );
};
