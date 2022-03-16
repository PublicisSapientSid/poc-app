import { NextPage } from 'next';
import {RechartsLibPolar} from '../../graph-libs/recharts-lib';

const PolarGraph: NextPage = () => { 
    
    const data: Array<Object> = [
        { routine: "Activity", score: 30 },
        { routine: "Mindfulness", score: 38 },
        { routine: "Sleep", score: 40 },
        { routine: "Mental Wellbeing", score: 60 },
        { routine: "Physical health", score: 57 },
        { routine: "Nutrition", score: 52 },
        { routine: "Self-Control", score: 47 },
    ];
    
    return (
        <div>
            <RechartsLibPolar
                data = {data}
                radarProp = "score"
                polarProp = "routine"
                width={500}
                height={350}
            />
        </div>
    );
}

export default PolarGraph;
