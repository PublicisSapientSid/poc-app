import { VictoryBar, VictoryChart, VictoryTheme, VictoryLine, VictoryPolarAxis } from 'victory';
import { BarProps, LineProps, PolarBarProps } from '../types/victory';

const getMaxValue = (data: any, prop: string) => {

    const maxObject = data.reduce((data1: any, data2: any) => (data1[prop] > data2[prop])? data1 : data2);
    return maxObject[prop];
};

export const VictoryLibLine = ({data, xAxis, yAxis}: LineProps) => {
 
    return (
        <VictoryChart theme={VictoryTheme.material}>
            <VictoryLine
                style={{
                    data: { stroke: "#475569" },
                    parent: { border: "1px solid #ccc"}
                }}
                data={data}
                x={xAxis}
                y={yAxis}
                domain={{y: [0, 30000]}}
            />
        </VictoryChart>
    );
};

export const VictoryLibBar = ({data, xAxis, yAxis, prop}: BarProps) => {

    const lineData = data.map((val: any) => ({[xAxis]: val[xAxis], [yAxis]: getMaxValue(data, prop)}));
    console.log(lineData);
    
    return (
        <VictoryChart domainPadding={{x: 20}}>
            
            <VictoryLine
            style={{
                    data: {
                        stroke: "red"
                    }
                }
            }
                data={lineData}
                x={xAxis}
                y={yAxis}
                y0={8}
            />
            <VictoryBar
                style={{
                    data: { fill: "#475569" },
                }}
                data={data}
                x={xAxis}
                y={yAxis}
                barWidth={30}
            />
        </VictoryChart>
    );
};

export const VictoryLibPolar = ({data, xAxis, yAxis, maxValue}: PolarBarProps) => {

    const polarData = data.map((value: any) => (
        {
            x: value[xAxis], 
            y: value[yAxis]
        }
    ));

    return (
        <VictoryChart polar theme={VictoryTheme.material} innerRadius={35}>
            <VictoryPolarAxis
                style={{ axis: { stroke: "transparent" }, grid: {} }}
                tickFormat={(tick: any) => ``}
            />
            <VictoryPolarAxis
                labelPlacement="perpendicular"
            />
            <VictoryBar
                data={polarData}
                style={{
                    data: { fill: "#C4C4C4", stroke: "#F2F2F2", strokeWidth: 2 }
                }}
                domain={{y: [0, maxValue]}}
            />
        </VictoryChart>
    );
}
