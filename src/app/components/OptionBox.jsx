'use client';

import React from 'react';

export default function OptionBox({options,setOptions}) {

const [regionLevel, setRegionLevel] = React.useState("Distribution Division");

const regions = [
  'Country',
  'Distribution Division',
  'Province',
  'Area',
];

return (
  <div className='w-[20vw] p-[10px] bg-gray-100'>

    <ul className="menu menu-sm bg-base-200 rounded-box w-56">
      <li><a>Country</a></li>
      <li><a>DD</a></li>
      <li><a>P</a></li>
      <li><a>AreaD</a></li>
    </ul>

    <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
    <legend className="fieldset-legend">Node types</legend>
      <label className="label">
        <input type="checkbox"  className="checkbox" />
        G
      </label>
      <label className="label">
        <input type="checkbox"  className="checkbox" />
        Tp
      </label>
      <label className="label">
        <input type="checkbox"  className="checkbox" />
        Hp
      </label>
    </fieldset>

    <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
    <legend className="fieldset-legend">Lables</legend>
      <label className="label">
        <input type="checkbox"  className="checkbox" 
          checked={options.showLabels}
          onChange={() =>
            setOptions((prev) => ({ ...prev, showLabels: !prev.showLabels }))
          }
        />
        show lables
      </label>
    </fieldset>
  </div>
);
}
