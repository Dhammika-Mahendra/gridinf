'use client'

import Image from "next/image";
import D3Chart from "./components/D3Chart";
import Map from "./components/Map";
import NetworkMap from "./components/NetworkMap";
import OptionBox from "./components/OptionBox";
import GraphBox from "./components/GraphBox";
import { useEffect, useState } from "react";

export default function Home() {

  const [options, setOptions] = useState({
    showNodeLabels: true,
    showRegionLabels :true,
    showg: true,
    showg2: true,
    showg3: true,
    showg4: true,
    showhp: true,
    showtp: true,
    show220: true,
    show132: true,
    regionalLevel: "Country",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mapData, setMapData] = useState([]);
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    fetch('/api/mapData')
      .then(response => {
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setMapData({ nodes: data.nodes, links: data.links });
        setGraphData(data.graph);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1rem"
      }}>
        <p className="m-5">Loading map data</p>
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.2rem"
      }}>
        <div role="alert" className="alert alert-warning alert-outline">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>Warning: {error}</span>
        </div>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-1 py-2 bg-gray-400 text-white rounded"
        >
          Try Again
        </button>
      </div>
    );
  }

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
      {/* <GraphBox graphData={graphData}></GraphBox> */}
      <NetworkMap options={options} data={mapData}></NetworkMap>
      <OptionBox options={options} setOptions={setOptions}></OptionBox>
    </div>
  );
}
