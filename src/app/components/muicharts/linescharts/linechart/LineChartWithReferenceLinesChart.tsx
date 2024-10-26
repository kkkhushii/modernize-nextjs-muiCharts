"use client";
import * as React from "react";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { ChartsReferenceLine } from "@mui/x-charts/ChartsReferenceLine";
import { LinePlot, MarkPlot } from "@mui/x-charts/LineChart";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";
import ParentCard from "../../../shared/ParentCard";
import LineChartWithReferenceLinesCode from "../../code/linechartscode/LineChartWithReferenceLinesCode";
import { useTheme } from "@mui/material";

export default function LineChartWithReferenceLines() {
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
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
    const Linecolor = theme.palette.warning.main;

    return (
        <ParentCard
            title="LineChartWithReferenceLines"
            codeModel={<LineChartWithReferenceLinesCode />}
        >
            <ChartContainer
                width={500}
                height={300}
                series={[
                    { data: pData, label: "pv", type: "line", color: primary },
                    { data: uData, label: "uv", type: "line", color: secondary },
                ]}
                xAxis={[{ scaleType: "point", data: xLabels }]}
            >
                <LinePlot />
                <MarkPlot />
                <ChartsReferenceLine
                    x="Page C"
                    label="Max PV PAGE"
                    lineStyle={{ stroke: Linecolor }}
                />
                <ChartsReferenceLine
                    y={9800}
                    label="Max"
                    lineStyle={{ stroke: Linecolor }}
                />
                <ChartsXAxis />
                <ChartsYAxis />
            </ChartContainer>
        </ParentCard>
    );
}
