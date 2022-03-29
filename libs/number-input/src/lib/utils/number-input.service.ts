import { numberData } from "../number-input";

export const sanitizeInputValue = (dataSet: numberData[]):numberData[] => {
    return [
        ...dataSet.map((data) => {
          if (data.value) {
            if (data.min) {
              if (data.value > data.max || data.value < data.min)
                data.value = data.min;
            } else if (data.value > data.max) data.value = 0;
          }
          return data;
        }),
      ]
}