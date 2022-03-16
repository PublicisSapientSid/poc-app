export interface LineProps {
    data: any;
    xAxis: string;
    yAxis: string;
};

export interface BarProps {
    data: any;
    xAxis: string;
    yAxis: string;
    prop: string;
};

export interface PolarBarProps {
    data: any;
    xAxis: string;
    yAxis: string;
    maxValue: number;
};
