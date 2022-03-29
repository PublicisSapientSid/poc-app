import { RadioButton } from '@poc/radio-button';
import { ChangeEvent, useState } from 'react';
import styles from './multiple-choice-question.module.scss';

export interface McqValueInterface {
  formControlName: string;
  formValues: {
    label: string;
    value: string;
  }[];
}

export const MultipleChoiceQuestion = () => {
  const [radioValue, setRadioValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setRadioValue(value);
  };

  const mcqValues: McqValueInterface = {
    formControlName: 'fruits',
    formValues: [
      {
        label: 'Apple',
        value: 'apple',
      },
      {
        label: 'Mango',
        value: 'mango',
      },
      {
        label: 'Orange',
        value: 'orange',
      },
    ],
  };

  const chosenValue = mcqValues.formValues.filter(
    (form) => form.value === radioValue
  )[0]?.label;

  return (
    <div className={styles['radio-button']}>
      <p className={styles['radio-question']}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
        praesentium, architecto perferendis quasi nulla voluptatibus?{' '}
        <strong>{chosenValue}</strong>
      </p>
      {mcqValues.formValues.map((mcq) => (
        <RadioButton
          name={mcqValues.formControlName}
          val={mcq.value}
          isChecked={radioValue === mcq.value}
          label={mcq.label}
          handleChange={handleChange}
          buttonSize="lg"
          key={mcq.value}
        />
      ))}
    </div>
  );
};
