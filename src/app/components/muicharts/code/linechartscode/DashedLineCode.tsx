import React from 'react'
import CodeDialog from "@/app/components/shared/CodeDialog";
import { markElementClasses } from '@mui/x-charts';


function DashedLineCode() {
  return (
    <CodeDialog>
      {`
    
'use client'
import * as React from 'react';
import {
    LineChart,
    lineElementClasses,
    markElementClasses,
} from '@mui/x-charts/LineChart';
import { useTheme } from "@mui/material";

const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'DashedLineChart ',
},
]; export default function DashedLineChart() {
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
                    { data: pData, label: 'pv', id: 'pvId', color: primary },
                    { data: uData, label: 'uv', id: 'uvId', color: secondary },
                ]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
               sx={\`
                \${\`& .\${lineElementClasses.root}, .\${markElementClasses.root}\`}: {
                    strokeWidth: 1,
                },
                \`.MuiLineElement-series-pvId\`: {
                    strokeDasharray: '5 5',
                },
                \`.MuiLineElement-series-uvId\`: {
                    strokeDasharray: '3 4 5 2',
                },
                \${\`& .\${markElementClasses.root}:not(.${markElementClasses.highlighted})\`}: {
                    fill: '#fff',
                },
                \${\`& .\${markElementClasses.highlighted}\`}: {
                    stroke: 'none',
                },
            \`}
            />
      );
}
  `}
    </CodeDialog >
  )
}

export default DashedLineCode
