import { HorizontalGridLines, LineSeries, XAxis, XYPlot, YAxis, VerticalBarSeries, 
    VerticalGridLines, LabelSeries } from "react-vis"
import { BarProps, LineProps } from "../types/reactvis";

export const ReactVisLibLine = ({data, xAxis, yAxis}: LineProps) => {
    
    const plotData = data.map((val: any, ind: string | number) => ({x: ind, y: val[yAxis]}))

    return (
        <XYPlot width={400} height={300} yDomain={[0, 30000]}>
            <HorizontalGridLines/>
            <XAxis 
                tickTotal={data.length} 
                tickFormat={v => `${data[v][xAxis]}`}
            />
            <YAxis
                tickTotal={2}
                tickValues={[0, 30000]}
            /> 
            <LineSeries
                color="#475569"
                data={plotData}
            />
        </XYPlot>
    );
};

export const ReactVisLibBar = ({data, xProp, yProp}: BarProps) => {

    const plotData: any[] = data.map((d: any) => ({x: d[xProp], y: d[yProp]}));

    return (
        <XYPlot
          xType="ordinal"
          width={500}
          height={350}
          xDistance={100}
          stackBy="y"
        >
            <XAxis/>
            <YAxis />
            <VerticalBarSeries 
                data={plotData}
                barWidth={0.4}
                fill="#475569"
                stroke="#475569"
            />
            <LabelSeries data={plotData}/>
        </XYPlot>
    );
};
