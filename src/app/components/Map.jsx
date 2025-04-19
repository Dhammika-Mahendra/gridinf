"use client";

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import rewind from '@turf/rewind';

const Map = () => {
  const svgRef = useRef(null);
  const mapGroupRef = useRef(null);

  useEffect(() => {
    // Create the SVG element and set its size
    const svg = d3.select(svgRef.current)
      .attr("width", 350)
      .attr("height", 600);
    
    // Create a group element for the map that will be transformed during zoom/pan
    const mapGroup = svg.append("g");
    mapGroupRef.current = mapGroup;

    // Define the geographic projection
    const projection = d3.geoMercator()
      .scale(8000)  
      .center([80.64, 7.66])
      .translate([165, 330]); 

    // Create a path generator for geographic data
    const path = d3.geoPath().projection(projection);

    // Define zoom behavior
    const zoom = d3.zoom()
      .scaleExtent([1, 8]) // Set min/max zoom scale
      .on("zoom", (event) => {
        // Apply the zoom transform to the map group
        mapGroup.attr("transform", event.transform);
      });

    // Apply zoom behavior to the SVG
    svg.call(zoom);

    // Prevent default browser zoom behavior
    svg.on("wheel", (event) => {
      event.preventDefault();
    });

    // Load your GeoJSON data
    d3.json("/MergedMap.json").then((data) => {
      if (data.type === "FeatureCollection") {
        // Rewind each feature to ensure correct winding order
        const correctedFeatures = data.features.map(feature => rewind(feature, { reverse: true }));
        const correctedData = { ...data, features: correctedFeatures };
    
        mapGroup.selectAll(".region")
          .data(correctedData.features)
          .enter()
          .append("path")
          .attr("class", "region")
          .attr("d", path)
          .style("fill", "#eee")
          .style("stroke", "#222")
          .style("stroke-width", 0.2)
          .style("fill", d => d.properties.fid == 22 ? "#f00" : "#eee");
      } else {
        console.error("Expected GeoJSON of type FeatureCollection, but got:", data.type);
      }
    });

  }, []);

  return (
    <div style={{ touchAction: "none" }}>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Map;