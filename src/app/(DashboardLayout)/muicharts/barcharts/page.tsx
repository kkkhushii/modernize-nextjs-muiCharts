import PageContainer from "@/app/components/container/PageContainer";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import React from "react";
import TinyBarChart from '@/app/components/muicharts/barcharts/TinyBarChart'
import StackedBarChart from '@/app/components/muicharts/barcharts/StackedBarChart'
import SimpleBarChart from "@/app/components/muicharts/barcharts/SimpleBarChart";
import MixedBarChart from '@/app/components/muicharts/barcharts/MixedBarChart'
import PositiveAndNegativeBarChart from "@/app/components/muicharts/barcharts/PositiveAndNegativeBarChart";
import BarChartStackedBySignChart from "@/app/components/muicharts/barcharts/BarChartStackedBySignChart";
import { Grid } from "@mui/material";
import BiaxialBarChart from "@/app/components/muicharts/barcharts/BiaxialBarChart";

const BCrumb = [
    {
        to: "/",
        title: "Home",
    },
    {
        title: "Bar Charts",
    },
];

const BarChart = () => {
    return (
        <PageContainer title="Bar Chart" description="this is Bar Chart">

            <Breadcrumb title="Bar Chart" items={BCrumb} />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TinyBarChart />
                </Grid>
                <Grid item xs={12}>
                    <SimpleBarChart />
                </Grid>
                <Grid item xs={12}>
                    <StackedBarChart />
                </Grid>
                <Grid item xs={12}>
                    <MixedBarChart />
                </Grid>
                <Grid item xs={12}>
                    <PositiveAndNegativeBarChart />
                </Grid>
                <Grid item xs={12}>
                    <BarChartStackedBySignChart />
                </Grid>
                <Grid item xs={12}>
                    <BiaxialBarChart />
                </Grid>

            </Grid>
        </PageContainer>
    );
};

export default BarChart;
