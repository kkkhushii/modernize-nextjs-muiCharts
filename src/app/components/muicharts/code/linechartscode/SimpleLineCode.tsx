import React from "react";
import CodeDialog from "@/app/components/shared/CodeDialog";

function SimpleLineCode() {
    return (
        <CodeDialog>
            {`
            
'use client'
import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import { useTheme } from "@mui/material";

   const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'SimpleLineChart ',
  },
]; 
function SimpleLineChart() {
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
       

            <LineChart
                width={500}
                height={300}
                series={[
                    { data: pData, label: 'pv', color: primary },
                    { data: uData, label: 'uv', color: secondary },
                ]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
            />
       
    )
}

export default SimpleLineChart
`}
        </CodeDialog>
    );
}

export default SimpleLineCode;