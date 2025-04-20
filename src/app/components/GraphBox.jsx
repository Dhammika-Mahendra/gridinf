'use client';


import React from 'react';

const GraphBox = () => {
    return (
        <div className='w-[30vw] p-[10px] h-screen bg-gray-100'>
            <h2>Graph</h2>
            <div className="graph-container">
                <p>Your graph content will go here</p>
            </div>
            <div className="graph-controls">
                <button className="control-btn">Zoom In</button>
                <button className="control-btn">Zoom Out</button>
                <button className="control-btn">Reset</button>
            </div>
        </div>
    );
};

export default GraphBox;
