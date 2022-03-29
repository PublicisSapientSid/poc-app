import { numberData, NumberInput } from '@poc/number-input';
import {
  convertHeightUnits,
  getConsolidatedHeight,
  initialHeightImperialTemplate,
  initialHeightMetricTemplate,
} from 'apps/poc-app/utils/unit-conversion';
import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { ButtonComponent } from '../../atoms/ButtonComponent';
import styles from './height-input.module.scss';

export const HeightInput = () => {
  const [isMetric, setIsMetric]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(true);

  const [dataSource, setDataSource]: [
    numberData[],
    Dispatch<SetStateAction<numberData[]>>
  ] = useState([]);

  // Sets initial height based on measurement unit selected
  useEffect(() => {
    const heightTemplate: numberData[] = isMetric
      ? initialHeightMetricTemplate
      : initialHeightImperialTemplate;
    setDataSource(heightTemplate);
  }, []);

  // Displays output value when continue button clicked
  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    console.log(
      `%c The returned output is ${getConsolidatedHeight(
        dataSource,
        isMetric
      )}cm`,
      'font-size: 16px; color: cyan;'
    );
    return;
  };

  // Handles conversion of unit when Switch button clicked
  const handleUnitConversion = (e: MouseEvent<HTMLDivElement>): void => {
    const resultantHeight = convertHeightUnits(dataSource, isMetric);
    setDataSource(resultantHeight);
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
