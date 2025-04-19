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
    <div style={{backgroundColor: "#f2f2f2", width:"20%"}}>
      <h2>Regional Level:</h2>
      <div>
        {regions.map((region) => (
          <label key={region}>
            <input
              type="radio"
              name="region"
              value={region}
              checked={regionLevel === region}
              onChange={() => setRegionLevel(region)}
              className="hidden"
            />
            {region}
          </label>
        ))}
      </div>
    </div>
  );
}
