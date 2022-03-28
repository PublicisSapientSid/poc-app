import { ChangeEvent, useState } from 'react';
import styles from './number-input.module.scss';

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
  const [inputDataSet, setInputDataSet] = useState(dataSet);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const {
      target: { value: eventValue },
    } = event;
    let updatedData = [...dataSet];
    updatedData[index].value = Number(eventValue);
    setInputDataSet(updatedData);
  };

  return (
    <div className={styles['input-container']}>
      {/* {JSON.stringify(inputDataSet)} */}
      {inputDataSet.map((data: numberData, index: number) => (
        <div className={styles['inputs']}>
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
