import { numberData, NumberInput } from '@poc/number-input';
import { Dispatch, MouseEvent, SetStateAction, useState } from 'react';
import { ButtonComponent } from '../../atoms/ButtonComponent';
import styles from './height-input.module.scss';

export const HeightInput = () => {
  const [dataSource, setDataSource]: [
    numberData[],
    Dispatch<SetStateAction<numberData[]>>
  ] = useState([
    {
      min: 0,
      max: 10,
      label: 'Feet (ft)',
      value: 3,
    },
    {
      min: 2,
      max: 8,
      label: 'Inches (in)',
      value: 7,
    },
  ]);

  const [isMetric, setIsMetric]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    return;
  };

  const handleUnitConversion = (e: MouseEvent<HTMLDivElement>): void => {
    setIsMetric((isMetric) => !isMetric);
  };

  return (
    <div className={styles['height-container']}>
      <NumberInput dataSet={dataSource} />
      <div className={styles['unit-switch']} onClick={handleUnitConversion}>
        Switch to {isMetric ? 'Imperial' : 'Metric'} System
      </div>
      <ButtonComponent
        buttonLabel="Save and continue"
        handleClick={handleClick}
      />
    </div>
  );
};
