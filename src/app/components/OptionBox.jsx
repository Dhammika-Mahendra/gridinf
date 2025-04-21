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
  <div className='w-[20vw] p-[10px] bg-gray-100'>
    <select defaultValue="Pick a text editor">
      <option>VScode</option>
      <option>VScode fork</option>
      <option>Another VScode fork</option>
    </select>

    <ul className="menu menu-sm bg-base-200 rounded-box w-56">
      <li><a>Small 1</a></li>
      <li><a>Small 2</a></li>
    </ul>
  </div>
);
}
