import { NextPage } from 'next';
import {VictoryLibLine} from '../../graph-libs/victory-lib';

const LineGraph: NextPage = () => { 
    
    const data: Array<Object> = [
        {name: 'S', steps: 5000}, 
        {name: 'M', steps: 25000}, 
        {name: 'T', steps: 20000}, 
        {name: 'W', steps: 30000},
        {name: 'TH', steps: 28000}, 
        {name: 'F', steps: 29000},
        {name: 'S', steps: 24000}
    ];
    
    return (
        <div style={{paddingLeft: '10px'}}>
            <VictoryLibLine 
                data={data}
                xAxis={"day"}
                yAxis={"steps"}
            />
        </div>
    );
}

export default LineGraph;
