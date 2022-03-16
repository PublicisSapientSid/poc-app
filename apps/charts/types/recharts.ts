export interface LineProps {
    width: number; 
    height: number; 
    data: any; 
    showAxisLine: boolean; 
    prop: string; 
    showStrokedDash: boolean; 
    totalPoints: number;
}


export interface BarProps {
    width: number; 
    height: number; 
    data: any; 
    prop: string; 
    showAxisLine: boolean;
}

export interface PolarBarProps {
    data: any; 
    radarProp: string; 
    polarProp: string;
    width: number;
    height: number;
}

export interface DonutProps {
    data: any;
    prop: string;
}
