"use client";

import PageContainer from "@/app/components/container/PageContainer";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import React from "react";
import { Grid } from "@mui/material";
import BasicCustomIcons from "@/app/components/muitrees/simpletree/BasicCustomIcons";
import CustomTreeItemView from "@/app/components/muitrees/simpletree/CustomTreeItemView";

const BCrumb = [
    {
        to: "/",
        title: "Home",
    },
    {
        title: "SimpleTreeView ",
    },
];

const SimpleTreeView = () => {
    return (
        <PageContainer title="SimpleTreeView" description="this is SimpleTreeView ">
            <Breadcrumb title="SimpleTreeView" items={BCrumb} />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <BasicCustomIcons />
                </Grid>
                <Grid item xs={12}>
                    <CustomTreeItemView />
                </Grid>
            </Grid>
        </PageContainer>
    );
};

export default SimpleTreeView;
