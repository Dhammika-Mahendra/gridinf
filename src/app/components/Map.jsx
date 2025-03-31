"use client";

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Map = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    // Create the SVG element and set its size
    const svg = d3.select(svgRef.current)
      .attr("width", 350)
      .attr("height", 600);

    // Define the geographic projection
    const projection = d3.geoMercator()
      .scale(8000)   // Adjust the scale to zoom into the region
      .center([80.64, 7.66])  // Adjust to the center of your map's coordinates (example: [longitude, latitude])
      .translate([165, 330]);   // Position the map's center within the SVG

    // Create a path generator for geographic data
    const path = d3.geoPath().projection(projection);

    // Load your GeoJSON data
    d3.json("/LK.json").then((data) => {
      // Ensure the data is in the expected format (GeoJSON)
      if (data.type === "GeometryCollection") {
        svg.selectAll(".region")
          .data(data.geometries)
          .enter().append("path")
          .attr("class", "region")
          .attr("d", path)
          .style("fill", "steelblue")
          .style("stroke", "white")
          .style("stroke-width", 0.5);
      } else {
        console.error("Expected GeoJSON of type GeometryCollection, but got:", data.type);
      }
    });
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default Map;
