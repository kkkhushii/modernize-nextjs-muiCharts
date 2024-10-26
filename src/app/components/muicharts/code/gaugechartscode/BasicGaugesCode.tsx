import React from 'react'
import CodeDialog from "@/app/components/shared/CodeDialog";

function BasicGaugesCode() {
    return (
        <CodeDialog>
            {`
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';

const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'BasicGaugesChart ',
},
]; 

export default function BasicGaugesChart() {
    return (

            <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
                <Gauge width={100} height={100} value={60} />
                <Gauge width={100} height={100} value={60} startAngle={-90} endAngle={90} />
            </Stack>
    );
}


`}
        </CodeDialog>
    )
}

export default BasicGaugesCode