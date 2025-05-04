'use client'

import Image from "next/image";
import D3Chart from "./components/D3Chart";
import Map from "./components/Map";
import NetworkMap from "./components/NetworkMap";
import OptionBox from "./components/OptionBox";
import GraphBox from "./components/GraphBox";
import { useState } from "react";

export default function Home() {

  const [options, setOptions] = useState({
    showLabels: true,
  });

  return (
    <div 
      style={{ 
        display: "flex", 
        flexDirection: "row", 
        alignItems: "stretch", 
        justifyContent: "center", 
        height: "100vh",
        width: "100vw", 
        }}
      >
      <GraphBox></GraphBox>
      <NetworkMap options={options}></NetworkMap>
      <OptionBox options={options} setOptions={setOptions}></OptionBox>
    </div>
  );
}
