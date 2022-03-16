import { NextPage } from 'next';
import {RechartsLibDonut} from '../../graph-libs/recharts-lib';

const DonutGraph: NextPage = () => { 
    
    const data: Array<Object> = [
        {name: 'A', value: 1000},
        {name: 'B', value: 1000},
        {name: 'C', value: 1000},
        {name: 'D', value: 1000},
        {name: 'E', value: 1000},
        {name: 'F', value: 1000},
        {name: 'G', value: 1000},
        {name: 'H', value: 1000},
        {name: 'I', value: 1000},
    ];
    
    return (
        <div>
            <RechartsLibDonut 
                data = {data}
                prop = {'value'}
            />
        </div>
    );
}

export default DonutGraph;
