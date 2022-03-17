import { NextPage } from 'next';
import {RechartsLibLine} from '../../graph-libs/recharts-lib';

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
        <div>
            <RechartsLibLine
                width = {500}
                height = {350}
                data = {data}
                showAxisLine = {false}
                xAxis = {"name"}
                prop = {"steps"}
                showStrokedDash = {false}
                totalPoints = {7}
            />
        </div>
    );
}

export default LineGraph;
