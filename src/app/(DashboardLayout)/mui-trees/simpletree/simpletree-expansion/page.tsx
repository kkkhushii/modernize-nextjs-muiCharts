"use client";

import PageContainer from "@/app/components/container/PageContainer";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import React from "react";

import { Grid } from "@mui/material";
import ControlledExpansionTree from "@/app/components/muitrees/simpletree/ControlledExpansionTree";
import ApiMethodSetItemExpansion from "@/app/components/muitrees/simpletree/ApiMethodSetItemExpansion";

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
                    <ControlledExpansionTree />
                </Grid>
                <Grid item xs={12}>
                    <ApiMethodSetItemExpansion />
                </Grid>
            </Grid>
        </PageContainer>
    );
};

export default SimpleTreeView;
