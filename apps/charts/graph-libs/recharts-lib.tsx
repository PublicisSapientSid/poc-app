import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, BarChart, Bar, ReferenceLine, PolarAngleAxis, 
    PieChart, Pie, Sector, Surface } from 'recharts';
import { BarProps, DonutProps, LineProps, PolarAreaProps, PolarSectorOptions } from '../types/recharts';

const getMaxValue = (data: any, prop: string) => {

    const maxObject = data.reduce((data1: any, data2: any) => (data1[prop] > data2[prop])? data1 : data2);
    return maxObject[prop];
};

export const RechartsLibLine = ({width, height, data, showAxisLine, xAxis,  prop, showStrokedDash, totalPoints}: LineProps) => {
    
    const maxSteps: number = getMaxValue(data, prop);
    const totalRefLines: number = (totalPoints && totalPoints > 1) ? totalPoints-1 : 0;
    
    const ticks: any[] = data.map((val: any) => val[xAxis]);

    let refLines: any = [];
    if(totalRefLines !== 0) {
        const refLinesGap: number = maxSteps / totalRefLines; 
        refLines = Array.from(Array(totalRefLines).keys()).map((refLineNum: any) =>
            <ReferenceLine 
                key={refLineNum} 
                y={maxSteps- (refLinesGap * refLineNum )} 
                stroke="#94A3B8"
            />
        );
    }
    
    return (
        <LineChart width={width} height={height} data={data} >
            <Legend verticalAlign="top" height={36}/>
            <CartesianGrid vertical={false} stroke="#94A3B8"/>
            <XAxis
                dataKey="name"
                type="category"
                tickSize={data.length}
                ticks={ticks}
                padding={{ left: 20, right: 20 }}
            />
            <YAxis 
                axisLine={showAxisLine} 
                type="number"
                tickSize={2}
                ticks={[0, maxSteps] }
                domain={[0, maxSteps]}
            />
            {refLines}
            <Tooltip/>
            <Line
                type="linear"
                dataKey={prop} 
                stroke="#475569"
                strokeDasharray={showStrokedDash ? "4 4": undefined}
                activeDot={{r: 5, fill: "#475569"}}
                dot={{ fill: '#475569', strokeWidth: 2 }}
            />
        </LineChart>
    );
};

export const RechartsLibBar = ({width, height, data, prop, showAxisLine}: BarProps) => {

    const maxValue: number = getMaxValue(data, prop);

    return (
        <BarChart width={width} height={height} data={data} >
            <CartesianGrid vertical={false} stroke="#94A3B8"/>
            <Legend verticalAlign="top" height={36}/>
            <XAxis
                dataKey="name"
                type="category"
                padding={{ left: 20, right: 20 }}
            />
            <YAxis 
                axisLine={showAxisLine} 
                type="number"
                allowDecimals={true}
                domain={[0, Math.floor( maxValue + 2 )]}
            />
            <Tooltip offset={10}/>
            <ReferenceLine y={maxValue} stroke="red" strokeDasharray="3 3" />
            <Bar 
                dataKey={prop} 
                fill="#475569" 
                barSize={40}
            />
        </BarChart>
    );
};

export const RechartsLibPolar = ({data, prop, maxValue, width, height, centerX, centerY}: PolarAreaProps) => {
    
    const sectorOptions: PolarSectorOptions = {
        sectorFills: ["#C4C4C4", "#F2F2F2"],
        sectorOuterRadius: [
          data.map((val: any) => val[prop]),
          new Array(data.length).fill(maxValue)
        ],
        segmentsCount: data.length
    };

    const angle: number = (360 / sectorOptions.segmentsCount);
    const startAngleMargin: number = 1;
    const endAngleMargin: number = 1;

    return (
        <Surface width={width} height={height}>
            {sectorOptions.sectorOuterRadius.map((outerRadius: any[], index: number) => {
                const outerRadiusIndex = index;
                const prevOuterRadius =
                outerRadiusIndex === 0
                    ? new Array(sectorOptions.segmentsCount).fill(60)
                    : sectorOptions.sectorOuterRadius[outerRadiusIndex - 1];
                const fill: string = sectorOptions.sectorFills[outerRadiusIndex];

                return outerRadius.map((radius: number, index: number) => {
                    const segmentIndex = index;
                    const innerRadius = prevOuterRadius[segmentIndex];
                    
                    return (
                        <Sector
                            fill={fill}
                            innerRadius={innerRadius}
                            outerRadius={radius}
                            cx={centerX}
                            cy={centerY}
                            startAngle={(segmentIndex - 1) * angle + startAngleMargin}
                            endAngle={segmentIndex * angle - endAngleMargin}
                            key={segmentIndex * outerRadiusIndex}
                            width={300}
                        />
                    );
                });
            })}
            <PolarAngleAxis 
                cx={centerX} 
                cy={centerY} 
                label={'hello'}
            />
        </Surface>
    );
};

export const RechartsLibDonut = ({data, prop}: DonutProps) => {

    return (
        <PieChart width={500} height={350}>
          <Pie data={data} dataKey={prop} outerRadius={130} innerRadius={70} fill="#475569" />
        </PieChart>
    );
};
