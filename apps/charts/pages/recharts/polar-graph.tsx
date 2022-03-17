import { NextPage } from 'next';
import {RechartsLibPolar} from '../../graph-libs/recharts-lib';

const PolarGraph: NextPage = () => { 
    
    const data: Array<Object> = [
        { routine: "Activity", score: 130 },
        { routine: "Mindfulness", score: 110 },
        { routine: "Sleep", score: 115 },
        { routine: "Mental Wellbeing", score: 105 },
        { routine: "Physical health", score: 95 },
        { routine: "Nutrition", score: 115 },
        { routine: "Self-Control", score: 120 },
    ];
    
    return (
        <div style={{background: "white"}}>
            <RechartsLibPolar
                data={data}
                prop='score'
                maxValue={150}
                centerX={250}
                centerY={175}
                width={500}
                height={350}
            />
        </div>
    );
}

export default PolarGraph;
