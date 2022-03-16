import { NextPage } from "next";
import { ChartJSLibLine } from "../../graph-libs/chartjs-lib";

const LineGraph: NextPage = () => {

    const data: Array<Object> = [
        {name: 'S', steps: 3212}, 
        {name: 'M', steps: 25000}, 
        {name: 'T', steps: 20000}, 
        {name: 'W', steps: 30000},
        {name: 'TH', steps: 28000}, 
        {name: 'F', steps: 29000},
        {name: 'S', steps: 24000}
    ];

    return (
        <ChartJSLibLine 
            data = {data}
            labelName = {"name"}
            labelData = {"steps"}
        />
    )
}

export default LineGraph;
