import styles from "../../styles/Graph.module.css";

import RechartsLineGraph from "../recharts/line-graph";
import RechartsBarGraph from "../recharts/bar-graph";
import RechartsPolarGraph from "../recharts/polar-graph";
import RechartsDonutGraph from "../recharts/donut-graph";

import ChartJSLineGraph from "../chartjs/line-graph";
import ChartJSBarGraph from "../chartjs/bar-graph";
import ChartJSPolarGraph from "../chartjs/polar-graph";

import VictoryLineGraph from "../victory/line-graph";
import VictoryBarGraph from "../victory/bar-graph";
import VictoryPolarGraph from "../victory/polar-graph";

import ReactVisLineGraph from "../reactvis/line-graph";
import ReactVisBarGraph from "../reactvis/bar-graph";
import { NextPage } from "next";

const graphContainer = (heading: string, ...graphs: Array<JSX.Element>) => {
    
    return (
        <div className={styles.graphContainer}>
            <div className={styles.graphHeading}>
                <h3>{heading}</h3>
            </div>            
            <div className={styles.allGraphs}>
                {graphs.map((graph: JSX.Element) => 
                    <div className={styles.singleGraph}>
                        {graph}
                    </div>                        
                )}
            </div>
        </div>
    );
};

const AllGraphs: NextPage = () => {
    
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>Graphs</h1>
            </div>
            <div className={styles.graph}>
                {graphContainer("Recharts", <RechartsLineGraph/>, <RechartsBarGraph/>, <RechartsPolarGraph/>, <RechartsDonutGraph/>)}
                {graphContainer("React ChartJS", <ChartJSLineGraph/>, <ChartJSBarGraph/>, <ChartJSPolarGraph/>)}
                {graphContainer("Victory", <VictoryLineGraph/>, <VictoryBarGraph/>, <VictoryPolarGraph/>)}
                {graphContainer("React Vis", <ReactVisLineGraph/>, <ReactVisBarGraph/>)}
            </div>
        </div>
    );
}

export default AllGraphs;
