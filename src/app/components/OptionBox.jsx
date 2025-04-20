'use client';

import React from 'react';

export default function OptionBox() {

const [regionLevel, setRegionLevel] = React.useState("Distribution Division");

const regions = [
  'Country',
  'Distribution Division',
  'Province',
  'Area',
];

return (
  <div className='w-[20vw]' style={{padding:'10px'}}>
    <select defaultValue="Pick a text editor">
      <option>VScode</option>
      <option>VScode fork</option>
      <option>Another VScode fork</option>
    </select>
  </div>
);
}
