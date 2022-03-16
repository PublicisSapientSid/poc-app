import { NextPage } from 'next';
import {RechartsLibBar} from '../../graph-libs/recharts-lib';

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
        <div>
            <RechartsLibBar
                width = {500}
                height = {350}
                data = {data}
                showAxisLine = {false}
                prop = {"sleepHours"}
            />
        </div>
    );
}

export default BarGraph;
