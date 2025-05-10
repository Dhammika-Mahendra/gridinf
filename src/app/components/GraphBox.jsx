'use client';

import React from 'react';
import ConnectionChart from './GraphBox/ConnectionChart';

const GraphBox = ({graphData}) => {

    return (
        <div className='w-[30vw] p-[10px] h-screen bg-gray-100'>
            <ConnectionChart data={graphData}></ConnectionChart>
        </div>
    );
};

export default GraphBox;
