'use client'

import PageContainer from "@/app/components/container/PageContainer";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import React from "react";
import { Grid } from "@mui/material";
import BasicScatterChart from "@/app/components/muicharts/scattercharts/BasicScatterChart";
import ScatterDatasetChart from "@/app/components/muicharts/scattercharts/ScatterDatasetChart";
import VoronoiInteractionChart from "@/app/components/muicharts/scattercharts/VoronoiInteractionChart";
import ScatterClickNoSnapChart from "@/app/components/muicharts/scattercharts/ScatterClickNoSnapChart";



const BCrumb = [
    {
        to: "/",
        title: "Home",
    },
    {
        title: "ScatterCharts ",
    },
];

const ScatterCharts = () => {
    return (
        <PageContainer title="ScatterCharts" description="this is ScatterCharts ">

            <Breadcrumb title="ScatterCharts" items={BCrumb} />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <BasicScatterChart />
                </Grid>
                <Grid item xs={12}>
                    <ScatterDatasetChart />
                </Grid>
                <Grid item xs={12}>
                    <VoronoiInteractionChart />
                </Grid>
                <Grid item xs={12}>
                    <ScatterClickNoSnapChart />
                </Grid>

            </Grid>
        </PageContainer>
    );
};

export default ScatterCharts;