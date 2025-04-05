"use client";

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

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
    d3.json("/LK.json").then((data) => {
      if (data.type === "GeometryCollection") {
        mapGroup.selectAll(".region")
          .data(data.geometries)
          .enter().append("path")
          .attr("class", "region")
          .attr("d", path)
          .style("fill", "#eee")
          .style("stroke", "#222")
          .style("stroke-width", 0.5);
      } else {
        console.error("Expected GeoJSON of type GeometryCollection, but got:", data.type);
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