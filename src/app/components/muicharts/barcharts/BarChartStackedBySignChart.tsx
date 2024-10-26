"use client";
import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useTheme } from "@mui/material";
import ParentCard from "../../shared/ParentCard";
import BarChartStackedBySignCode from "../code/barchartcode/BarChartStackedBySignCode";

function BarChartStackedBySignChart() {
  const pData = [2400, 1398, -9800, 3908, 4800, -3800, 4300];
  const uData = [4000, -3000, -2000, 2780, -1890, 2390, 3490];

  const xLabels = [
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
  const secondary = theme.palette.secondary.main;

  return (
    <ParentCard
      title="BarChartStackedBySignChart"
      codeModel={<BarChartStackedBySignCode />}
    >
      <BarChart
        width={500}
        height={300}
        series={[
          {
            data: pData,
            label: "pv",
            id: "pvId",
            stack: "stack1",
            color: primary,
          },
          {
            data: uData,
            label: "uv",
            id: "uvId",
            stack: "stack1",
            color: secondary,
          },
        ]}
        xAxis={[{ data: xLabels, scaleType: "band" }]}
      />
    </ParentCard>
  );
}

export default BarChartStackedBySignChart;
