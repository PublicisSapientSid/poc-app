import { NextPage } from 'next';
import Document from 'next/document';
import Head from 'next/head';
import { ReactVisLibLine } from "../../graph-libs/reactvis-lib";

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
        <div>
            <>
                <link rel="stylesheet" href="https://unpkg.com/react-vis/dist/style.css"/>
                <script type="text/javascript" src="https://unpkg.com/react-vis/dist/dist.min.js"/>
            </>
            <ReactVisLibLine
                data = {data}
                xAxis = {'name'}
                yAxis = {'steps'}
            />
        </div>
    );
};

export default LineGraph;
