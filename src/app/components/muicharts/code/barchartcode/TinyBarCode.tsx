import React from "react";
import CodeDialog from "@/app/components/shared/CodeDialog";

function TinyBarCode() {
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
    title: 'TinyBarChart ',
  },
];

const TinyBarChart = () => {
    
    const theme = useTheme();
    const primary = theme.palette.primary.main;

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

    return (
    
            <ChartContainer
                width={500}
                height={300}
                series={[{
                    data: uData,
                    label: 'uv',
                    type: 'bar',
                    color: primary
                }]}
                xAxis={[{ data: xLabels, scaleType: 'band' }]}
            >
                <BarPlot  />
            </ChartContainer>
       
    );
};

export default TinyBarChart;
    `}
        </CodeDialog>
    );
}

export default TinyBarCode;
