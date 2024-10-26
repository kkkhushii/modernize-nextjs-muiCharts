"use client";
import React from "react";
import { BarPlot, ChartContainer } from "@mui/x-charts";
import { useTheme } from "@mui/material/styles";
import ParentCard from "@/app/components/shared/ParentCard";
import TinyBarCode from "@/app/components/muicharts/code/barchartcode/TinyBarCode";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];
const TinyBarChart = () => {
  // Chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <ParentCard title="TinyBarChart" codeModel={<TinyBarCode />}>
      <ChartContainer
        width={500}
        height={300}
        series={[
          {
            data: uData,
            label: "uv",
            type: "bar",
            color: primary,
          },
        ]}
        xAxis={[{ data: xLabels, scaleType: "band" }]}
      >
        <BarPlot />
      </ChartContainer>
    </ParentCard>
  );
};

export default TinyBarChart;
