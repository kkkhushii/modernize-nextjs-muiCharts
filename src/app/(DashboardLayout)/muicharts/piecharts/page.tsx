'use client'

import PageContainer from "@/app/components/container/PageContainer";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import React from "react";

import { Grid } from "@mui/material";
import BasicPieChart from "@/app/components/muicharts/piecharts/BasicPieChart";
import TwoLevelPieChart from "@/app/components/muicharts/piecharts/TwoLevelPieChart";
import StraightAnglePieChart from "@/app/components/muicharts/piecharts/StraightAnglePieChart";
import TwoSimplePieChart from "@/app/components/muicharts/piecharts/TwoSimplePieChart";
import PieChartWithCustomizedLabel from "@/app/components/muicharts/piecharts/PieChartWithCustomizedLabel";
import PieChartWithPaddingAngleChart from "@/app/components/muicharts/piecharts/PieChartWithPaddingAngleChart";
import PieChartWithCenterLabelChart from "@/app/components/muicharts/piecharts/PieChartWithCenterLabelChart";
import OnSeriesItemClickChart from "@/app/components/muicharts/piecharts/OnSeriesItemClickChart";

const BCrumb = [
    {
        to: "/",
        title: "Home",
    },
    {
        title: "PieCharts ",
    },
];

const PieCharts = () => {
    return (
        <PageContainer title="PieCharts" description="this is PieCharts ">

            <Breadcrumb title="PieCharts" items={BCrumb} />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <BasicPieChart />
                </Grid>
                <Grid item xs={12}>
                    <TwoLevelPieChart />
                </Grid>
                <Grid item xs={12}>
                    <StraightAnglePieChart />
                </Grid>
                <Grid item xs={12}>
                    <TwoSimplePieChart />
                </Grid>
                <Grid item xs={12}>
                    <PieChartWithCustomizedLabel />
                </Grid>
                <Grid item xs={12}>
                    <PieChartWithPaddingAngleChart />
                </Grid>
                <Grid item xs={12}>
                    <PieChartWithCenterLabelChart />
                </Grid>
                <Grid item xs={12}>
                    <OnSeriesItemClickChart />
                </Grid>



            </Grid>
        </PageContainer>
    );
};

export default PieCharts;
