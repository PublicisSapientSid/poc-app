export interface LineProps {
    width: number; 
    height: number; 
    data: any[]; 
    showAxisLine: boolean; 
    xAxis: string;
    prop: string; 
    showStrokedDash: boolean; 
    totalPoints: number;
};

export interface BarProps {
    width: number; 
    height: number; 
    data: any; 
    prop: string; 
    showAxisLine: boolean;
};

export interface PolarAreaProps {
    data: any[];
    prop: string;
    maxValue: number;
    width: number
    height: number;
    centerX: number;
    centerY: number;
};

export interface DonutProps {
    data: any;
    prop: string;
};

export interface PolarSectorOptions {
    sectorFills: Array<string>;
    sectorOuterRadius: Array<Array<number>>;
    segmentsCount: number;
};
