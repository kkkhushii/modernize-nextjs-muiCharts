import React from 'react'
import CodeDialog from "@/app/components/shared/CodeDialog";


function MixedBarCode() {
  return (
    <CodeDialog>
      {`
    
'use client'
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useTheme } from '@mui/material';

const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'MixedBarChart ',
},
]; 
function MixedBarChart() {
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const amtData = [2400, 2210, 2290, 2000, 2181, 2500, 2100];

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
    const light = theme.palette.success.main;

    return (
            <BarChart
                width={500}
                height={300}
                series={[
                    { data: pData, label: 'pv', stack: 'stack1', color: primary },
                    { data: amtData, label: 'amt', color: light },
                    { data: uData, label: 'uv', stack: 'stack1', color: secondary },
                ]}
                xAxis={[{ data: xLabels, scaleType: 'band' }]}
            />

    )
}

export default MixedBarChart
`}
    </CodeDialog>
  )
}

export default MixedBarCode
