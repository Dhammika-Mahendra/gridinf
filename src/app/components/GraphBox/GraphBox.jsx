'use client';

import React from 'react';
import ConnectionChart from './ConnectionChart';

const GraphBox = ({graphData}) => {

    return (
        <div className='w-[30vw] h-screen bg-gray-100'>
            <ConnectionChart data={graphData}></ConnectionChart>
        </div>
    );
};

export default GraphBox;
