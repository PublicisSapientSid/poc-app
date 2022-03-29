import { numberData } from "../number-input";

export const sanitizeInputValue = (dataSet: numberData[]):numberData[] => {
  // debugger;
    return [
        ...dataSet.map((data) => {
          if (data.value === 0 || data.value) {
            if (data.value > data.max)
              data.value = data.max;
            else if (data.min && data.value < data.min) data.value = data.min;
            else if (data.value < 0) data.value = 0;
          }
          return data;
        }),
      ]
}