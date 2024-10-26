"use client";
import * as React from 'react';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { AreaPlot } from '@mui/x-charts/LineChart';
import ParentCard from "@/app/components/shared/ParentCard";
import { useTheme } from '@mui/material';
import TinyAreaCode from '../../code/areachartscode/TinyAreaCode';


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
        <ParentCard title="TinyAreaChart" codeModel={<TinyAreaCode />}>

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
        </ParentCard>
    );
}
