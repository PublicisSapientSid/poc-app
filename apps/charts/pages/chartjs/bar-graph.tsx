import { NextPage } from "next";
import { ChartJSLibBar } from "../../graph-libs/chartjs-lib";

const BarGraph: NextPage = () => { 
    
    const data: Array<Object> = [
        {name: 'S', sleepHours: 4},
        {name: 'M', sleepHours: 6}, 
        {name: 'T', sleepHours: 5.9},
        {name: 'W', sleepHours: 6.25},
        {name: 'TH', sleepHours: 4},
        {name: 'F', sleepHours: 6.25},
        {name: 'S', sleepHours: 4}
    ];
    
    return (
        <ChartJSLibBar
            data = {data}
            xLabel = 'name'
            yLabel = 'sleepHours'
            maxValue = {8}
        />
    );
}

export default BarGraph;
