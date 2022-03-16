import { NextPage } from 'next';
import { VictoryLibPolar } from '../../graph-libs/victory-lib';

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
            <VictoryLibPolar
                data={data}
                xAxis={"routine"}
                yAxis={"score"}
                maxValue={65}
            />
        </div>
    );
}

export default PolarGraph;
