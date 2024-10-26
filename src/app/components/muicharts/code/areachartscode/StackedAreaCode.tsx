import React from 'react'
import CodeDialog from "@/app/components/shared/CodeDialog";


function StackedAreaCode() {
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
title: 'StackedAreaChart ',
},
]; 

export default function StackedAreaChart() {
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const amtData = [2400, 2210, 0, 2000, 2181, 2500, 2100];
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
    const amtDatacolor = theme.palette.error.main;

    return (

            <LineChart
                width={500}
                height={300}
                series={[
                    { data: uData, label: 'uv', area: true, stack: 'total', showMark: false, color: primary },
                    { data: pData, label: 'pv', area: true, stack: 'total', showMark: false, color: secondary },
                    {
                        data: amtData,
                        label: 'amt',
                        area: true,
                        stack: 'total',
                        showMark: false,
                        color: amtDatacolor
                    },
                ]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
                sx={{
                    [\`& .\${lineElementClasses.root}\`]: {
                display: 'none',
                    },
                }}
            />
      
    );
}
`}
        </CodeDialog>
    )
}

export default StackedAreaCode
