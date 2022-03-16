import { NextPage } from "next";
import { ChartJSLibPolar } from "../../graph-libs/chartjs-lib";

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
        <div style={{width: '12vw', height: '12vw'}}>
            <ChartJSLibPolar
                data={data}
                label='score'
            />
        </div>
    );
}

export default PolarGraph;
