import React from 'react'
import CodeDialog from "@/app/components/shared/CodeDialog";


function StackedBarCode() {
    return (
        <CodeDialog>
            {`
"use client"

import React from "react";
import { BarPlot, ChartContainer } from "@mui/x-charts";
import { useTheme } from "@mui/material/styles";

const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'StackedBarChart ',
},
];

function StackedBarChart() {

    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const xLabels = [
        'Page A',
        'Page B',
        'Page C',
        'Page D',
        'Page E',
        'Page F',
        'Page G',
    ];

    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;

    return (
      
            <BarChart
                width={500}
                height={300}
                series={[
                    { data: pData, label: 'pv', id: 'pvId', stack: 'total', color: primary },
                    { data: uData, label: 'uv', id: 'uvId', stack: 'total', color: secondary },
                ]}
                xAxis={[{ data: xLabels, scaleType: 'band' }]}
            />
    
    )
}

export default StackedBarChart;
`}
        </CodeDialog>
    )
}

export default StackedBarCode
