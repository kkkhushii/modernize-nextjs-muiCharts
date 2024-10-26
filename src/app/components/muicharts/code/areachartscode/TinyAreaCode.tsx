import React from "react";
import CodeDialog from "@/app/components/shared/CodeDialog";

function TinyAreaCode() {
    return (
        <CodeDialog>
            {`

"use client";
import * as React from 'react';
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';
import { useTheme } from "@mui/material";

const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'TinyAreaChart ',
},
]; 

export default function TinyAreaChart() {
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
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
    return (
     

            <ChartContainer
                width={500}
                height={300}
                series={[
                    {
                        data: uData,
                        type: 'line',
                        label: 'uv',
                        area: true,
                        stack: 'total',
                        color: primary
                    },
                ]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
            >
                <AreaPlot />
            </ChartContainer>
    
    );
}

`}
        </CodeDialog>
    );
}

export default TinyAreaCode;
