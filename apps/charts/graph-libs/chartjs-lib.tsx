import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale,
    ArcElement,
    ChartOptions
} from 'chart.js';

import AnnotationPlugin from 'chartjs-plugin-annotation';

import { Line, Bar, PolarArea } from "react-chartjs-2";
import { BarProps, LineProps, PolarBarProps } from '../types/chartjs';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    RadialLinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    AnnotationPlugin
);

export const ChartJSLibLine = ({data, labelName, labelData}: LineProps) => {

    const labels = data.map((val: any) => val[labelName]);
    const plotData = data.map((val: any) => val[labelData]);

    const options: ChartOptions<any> = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            x: {
                display: false
            },
            y: {
                suggestedMax: 32000,
                display: true,
                ticks: {
                    callback: function(value: string, index: number, values: any) {
                        console.log(value);
                        return value;
                    }
                },
                grid: {
                    drawBorder: false
                }
            }
        }
    };

    const lineData = {
        labels: labels,
        datasets: [
            {
                label: labelData,
                data: plotData,
                fill: true,
                backgroundColor: "#475569",
                borderColor: "#475569"
            }
        ]
    };
    
    return (
        <Line 
            data={lineData}
            options={options}
        />
    );
};

export const ChartJSLibBar = ({data, xLabel, yLabel, maxValue}: BarProps) => {
    
    const xAxisLabel = data.map((val: any) => val[xLabel]);
    const yAxisValues = data.map((val: any) => val[yLabel]);

    const maxYValue = Math.max(...yAxisValues);
    
    const plotValues = {
        labels: xAxisLabel,
        datasets: [
            {
                label: `${yLabel}`,
                backgroundColor: '#475569',
                borderColor: '#E2E8F0',
                borderWidth: 2,
                data: yAxisValues
            }
        ]
    };
    
    const options: ChartOptions<any> = {
        plugins:{
            legend:{
                display:true,
            },
            annotation: {
                annotations: {
                    line1: {
                        type: 'line',
                        yMin: maxYValue,
                        yMax: maxYValue,
                        borderColor: '#F43F5E',
                        borderWidth: 1,
                        borderDash: [10, 5]
                    }
                }
            }
        },
        scales: {
            x: {
                display: false
            },
            y: {
                suggestedMax: maxValue,
                display: true,
                ticks: {
                    callback: function(value: string | number, index: number, values: any) {
                        return index;
                    }
                },
                grid: {
                    drawBorder: false
                }
            }
        }
    };

    return (
        <Bar
            data={plotValues}
            options={options}
        />
    );
};

export const ChartJSLibPolar = ({data, label}: PolarBarProps) => {

    const plotValues = data.map((val: any) => val[label]);

    const plotData = {
        datasets: [
          {
            data: plotValues,
            backgroundColor: '#C4C4C4',
          },
        ],
        innerHeight: 20
      };

      return (
          <PolarArea data={plotData}/>
      );
};
