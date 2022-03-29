import { numberData } from '@poc/number-input';

export const initialHeightImperialTemplate: numberData[] = [
  {
    min: 3,
    max: 7,
    label: 'Feet (ft)',
    value: 0,
  },
  {
    min: 0,
    max: 11,
    label: 'Inches (in)',
    value: 0,
  },
];

export const initialHeightMetricTemplate: numberData[] = [
  {
    min: 120,
    max: 250,
    label: 'Centimetres',
    value: 0,
  },
];

export const convertToInches = (dataSet: numberData[]): numberData[] => {
  const heightInInches = dataSet[0].value / 2.54;
  const imperialHeight = [...initialHeightImperialTemplate];
  imperialHeight[0].value = Math.floor(heightInInches / 12);
  imperialHeight[1].value = Math.round(heightInInches % 12);
  return imperialHeight;
};

export const convertToCentimeters = (dataSet: numberData[]): numberData[] => {
  const heightInCentimeters = (dataSet[0].value * 12 + dataSet[1].value) * 2.54;
  const metricHeight = [...initialHeightMetricTemplate];
  metricHeight[0].value = Math.round(heightInCentimeters);
  return metricHeight;
};

export const convertHeightUnits = (
  dataSet: numberData[],
  isMetric: boolean
): numberData[] => {
  const convertedHeight: numberData[] = isMetric
    ? [...convertToInches(dataSet)]
    : [...convertToCentimeters(dataSet)];
  return convertedHeight;
};

export const getConsolidatedHeight = (
  dataSet: numberData[],
  isMetric: boolean
): number => {
  return isMetric ? dataSet[0].value : convertToCentimeters(dataSet)[0].value;
};
