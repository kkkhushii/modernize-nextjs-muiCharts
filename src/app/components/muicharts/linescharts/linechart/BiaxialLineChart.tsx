"use client";
import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import BiaxialLineCode from "../../code/linechartscode/BiaxialLineCode";
import ParentCard from "@/app/components/shared/ParentCard";
import { useTheme } from "@mui/material";

export default function BiaxialLineChart() {
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
    return (
        <ParentCard title="BiaxialLineChart" codeModel={<BiaxialLineCode />}>
            <LineChart
                width={500}
                height={300}
                series={[
                    { data: pData, label: "pv", yAxisId: "leftAxisId", color: primary },
                    {
                        data: uData,
                        label: "uv",
                        yAxisId: "rightAxisId",
                        color: secondary,
                    },
                ]}
                xAxis={[{ scaleType: "point", data: xLabels }]}
                yAxis={[{ id: "leftAxisId" }, { id: "rightAxisId" }]}
                rightAxis="rightAxisId"
            />
        </ParentCard>
    );
}
