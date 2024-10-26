import * as React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import ParentCard from "@/app/components/shared/ParentCard";
import ArcDesignCode from '../code/gaugechartscode/ArcDesignCode';

const settings = {
    width: 200,
    height: 200,
    value: 60,
};

export default function ArcDesignChart() {
    return (
        <ParentCard title="ArcDesignChart" codeModel={<ArcDesignCode />}>

            <Gauge
                {...settings}
                cornerRadius="50%"
                sx={(theme) => ({
                    [`& .${gaugeClasses.valueText}`]: {
                        fontSize: 40,
                    },
                    [`& .${gaugeClasses.valueArc}`]: {
                        fill: '#5D87FF',
                    },
                    [`& .${gaugeClasses.referenceArc}`]: {
                        fill: theme.palette.text.disabled,
                    },
                })}
            />
        </ParentCard>
    );
}
