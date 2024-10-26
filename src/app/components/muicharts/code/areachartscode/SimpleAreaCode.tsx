import React from "react";
import CodeDialog from "@/app/components/shared/CodeDialog";
function SimpleAreaCode() {
    return (
        <CodeDialog>
            {`

"use client";
import React from 'react'
import { useTheme } from "@mui/material";
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';

const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'SimpleAreaChart ',
},
]; 
export default function SimpleAreaChart() {
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

            <LineChart
                width={500}
                height={300}
                series={[{ data: uData, label: 'uv', area: true, showMark: false, color: primary }]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
                sx={{
                    [\`& \.\${lineElementClasses.root}\`]: {
                     display: 'none',
                    },
                }}
            />
     
    );
}
`}
        </CodeDialog>
    );
}

export default SimpleAreaCode;
