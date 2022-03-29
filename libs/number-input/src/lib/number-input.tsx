import { ChangeEvent, useEffect, useState } from 'react';
import styles from './number-input.module.scss';
import { sanitizeInputValue } from './utils/number-input.service';

/* eslint-disable-next-line */
export interface NumberInputProps {
  dataSet: numberData[];
}

export type numberData = {
  label: string;
  min?: number;
  max: number;
  value?: number;
};

export function NumberInput({ dataSet }: NumberInputProps) {
  const correctedDataSet = sanitizeInputValue(dataSet);

  const [inputDataSet, setInputDataSet] = useState(correctedDataSet);

  useEffect(() => {
    setInputDataSet(sanitizeInputValue(dataSet));
  }, [dataSet]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const {
      target: { value: eventValue },
    } = event;
    setInputDataSet((data) => {
      let updatedData = [...data];
      updatedData[index].value = Number(eventValue);
      return updatedData;
    });
  };

  return (
    <div className={styles['input-container']}>
      {inputDataSet.map((data: numberData, index: number) => (
        <div className={styles['inputs']} key={`${data.label}_${index}`}>
          <label htmlFor={`${data.label}_${index}`}>{data.label}</label>
          <input
            id={`${data.label}_${index}`}
            type="number"
            max={data.max}
            min={data.min || 0}
            value={data.value || 0}
            onChange={(e) => handleChange(e, index)}
          />
        </div>
      ))}
    </div>
  );
}

export default NumberInput;
