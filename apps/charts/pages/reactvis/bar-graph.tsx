import Head from "next/head";
import { NextPage } from "next";
import { ReactVisLibBar } from "../../graph-libs/reactvis-lib";

const BarGraph: NextPage = () => { 
    
    const data = [
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
            <>
                <link rel="stylesheet" href="https://unpkg.com/react-vis/dist/style.css"/>
                <script type="text/javascript" src="https://unpkg.com/react-vis/dist/dist.min.js"/>
            </>
            <ReactVisLibBar
                    data = {data}
                    xProp = "name"
                    yProp = "sleepHours"
            />
        </div>
    );
}

export default BarGraph;
