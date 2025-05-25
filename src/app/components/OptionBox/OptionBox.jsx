'use client';

import React from 'react';
import Selector from '../../components/common/Selector';

export default function OptionBox({options,setOptions}) {

  const handleToggle = (key) => {
    setOptions((prev) => ({ 
      ...prev, 
      [key]: !prev[key] 
    }));
  };

  //change only the selcted property of options
  const handleRegionalLevel = (e) => {
    setOptions((prev) => ({ 
      ...prev, 
      regionalLevel: e.target.value 
    }));
  };


return (
  <div className='w-[20vw] p-[10px] bg-gray-100'>

    <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
      <legend className="fieldset-legend">Regional level</legend>
      <select className="select select-sm"
      value={options.regionalLevel}
      onChange={(e) => handleRegionalLevel(e)}>
        <option>Country</option>
        <option>Division</option>
        <option>Province</option>
        <option>Area</option>
      </select>
    </fieldset>


    <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
    <legend className="fieldset-legend">Lables</legend>
      <label className="label">
        <input type="checkbox"  className="checkbox-sm" 
          checked={options.showRegionLabels}
          onChange={() => handleToggle('showRegionLabels')}
        />
        show region lables
      </label>
      <label className="label">
        <input type="checkbox"  className="checkbox-sm" 
          checked={options.showNodeLabels}
          onChange={() => handleToggle('showNodeLabels')}
        />
        show node lables
      </label>
    </fieldset>

    <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
    <legend className="fieldset-legend">Nodes</legend>
      <Selector type="node" handleToggle={handleToggle} toggleProp="showg" text="Grid Sub Station - 220/132" iconColor="#FFB200"></Selector>
      <Selector type="node" handleToggle={handleToggle} toggleProp="showg2" text="Grid Sub Station - 132/33" iconColor="#EB5B00"></Selector>
      <Selector type="node" handleToggle={handleToggle} toggleProp="showg3" text="Grid Sub Station - 220/33" iconColor="#D91656"></Selector>
      <Selector type="node" handleToggle={handleToggle} toggleProp="showg4" text="Grid Sub Station - 132/11" iconColor="#FA4032"></Selector>
      <Selector type="node" handleToggle={handleToggle} toggleProp="showhp" text="Hydro Power plant" iconColor="#0595f5"></Selector>
      <Selector type="node" handleToggle={handleToggle} toggleProp="showtp" text="Thermal Power plant" iconColor="#754a61"></Selector>
    </fieldset>

    <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
    <legend className="fieldset-legend">Lines</legend>
      <Selector type="line" handleToggle={handleToggle} toggleProp="show220" text="220 kV" iconColor="#1d9100"></Selector>
      <Selector type="line" handleToggle={handleToggle} toggleProp="show132" text="132 kV" iconColor="#38ea28"></Selector>
    </fieldset>

  </div>
);
}
