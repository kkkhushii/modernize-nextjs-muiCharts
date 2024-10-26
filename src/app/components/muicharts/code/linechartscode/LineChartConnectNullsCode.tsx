import React from "react";
import CodeDialog from "@/app/components/shared/CodeDialog";

function LineChartConnectNullsCode() {
    return (
        <CodeDialog>
            {`

"use client";

import * as React from "react";
import Stack from "@mui/material/Stack";
import { LineChart } from "@mui/x-charts/LineChart";
import { useTheme } from "@mui/material";

const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'LineChartConnectNulls ',
},
]; 

export default function LineChartConnectNulls() {
  const data = [4000, 3000, 2000, null, 1890, 2390, 3490];
  const xData = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
   
      <Stack sx={{ width: "100%" }}>
        <LineChart
          xAxis={[{ data: xData, scaleType: "point" }]}
          series={[{ data, color: primary }]}
          height={200}
          margin={{ top: 10, bottom: 20 }}
        />
        <LineChart
          xAxis={[{ data: xData, scaleType: "point" }]}
          series={[{ data, connectNulls: true, color: primary }]}
          height={200}
          margin={{ top: 10, bottom: 20 }}
        />
      </Stack>
 
  );
}


`}
        </CodeDialog>
    );
}

export default LineChartConnectNullsCode;
