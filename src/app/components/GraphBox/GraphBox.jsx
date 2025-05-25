'use client';

import React from 'react';
import ConnectionChart from './ConnectionChart';

const GraphBox = ({graphData}) => {

    return (
        <div className='w-[30vw] h-screen bg-gray-100'>
            <div className="w-[96%] fixed top-0 left-0 bg-gray-100 z-10 flex justify-between items-center px-6">
                <span className="flex-1 text-right text-gray-700">220</span>
                <span className="flex-1 text-right text-gray-700">.</span>
                <span className="flex-1 text-right text-gray-700">132</span>
                <span className="flex-1 text-right text-gray-700">33</span>
                <span className="flex-1 text-right text-gray-700">11</span>
            </div>
            <div/>
            <ConnectionChart data={graphData}></ConnectionChart>
        </div>
    );
};

export default GraphBox;
