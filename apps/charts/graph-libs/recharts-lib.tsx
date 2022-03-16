import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, BarChart, Bar, ReferenceLine, RadarChart, PolarAngleAxis, PolarGrid, Radar, PolarRadiusAxis, PieChart, Pie } from 'recharts';
import { BarProps, DonutProps, LineProps, PolarBarProps } from '../types/recharts';

const getMaxValue = (data: any, prop: string) => {

    const maxObject = data.reduce((data1: any, data2: any) => (data1[prop] > data2[prop])? data1 : data2);
    return maxObject[prop];
};

export const RechartsLibLine = ({width, height, data, showAxisLine, prop, showStrokedDash, totalPoints}: LineProps) => {
    
    const maxSteps: number = getMaxValue(data, prop);
    const totalRefLines: number = (totalPoints && totalPoints > 1) ? totalPoints-1 : 0;
    
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

export const RechartsLibPolar = ({data, radarProp, polarProp, width, height}: PolarBarProps) => {

    const maxValue: number = getMaxValue(data, radarProp);

    return (
        <RadarChart outerRadius={150} width={width} height={height} style={{ margin: "0 auto" }}
              data={data} >
            <Radar name="Health Score" dataKey={radarProp} stroke=" " fill="#C4C4C4" fillOpacity={0.6} />
            <PolarGrid gridType='circle'/>
            <PolarAngleAxis dataKey={polarProp} />
            <PolarRadiusAxis angle={15} domain={[0, maxValue]} />
        </RadarChart>
       )
};

export const RechartsLibDonut = ({data, prop}: DonutProps) => {

    return (
        <PieChart width={500} height={350}>
          <Pie data={data} dataKey={prop} outerRadius={130} innerRadius={70} fill="#475569" />
        </PieChart>
    );
}
