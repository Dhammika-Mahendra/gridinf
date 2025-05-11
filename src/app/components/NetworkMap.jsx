"use client";
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import rewind from '@turf/rewind';
import { renderRegions , renderLabels } from "../../../lib/mapRender";

const NetworkMap = ({ options, data }) => {
  const svgRef = useRef(null);
  const [networkData, setNetworkData] = useState(data);
  const [currentTransform, setCurrentTransform] = useState(d3.zoomIdentity);


  // Main rendering function
  useEffect(() => {
    const width = window.innerWidth * 0.5;
    const height = window.innerHeight;
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("border", "1px solid #ccc");
    svg.selectAll("*").remove(); // Clear SVG before drawing

    // Root group to apply zoom
    const g = svg.append("g");
    const gMap = g.append("g").attr("class", "map-layer");

    // Projection setup
    const projection = d3.geoMercator()
      .scale(8000)
      .center([80.64, 7.66])
      .translate([width / 2, height / 2]);
    const pathGenerator = d3.geoPath().projection(projection);

    let x;
    // Load GeoJSON and draw map
    d3.json("/Map.json").then((data) => {
      if (data.type === "FeatureCollection") {
        const correctedFeatures = data.features.map(feature => rewind(feature, { reverse: true }));
        const correctedData = { ...data, features: correctedFeatures };

        gMap.selectAll("*").remove();
        x = renderRegions(gMap,pathGenerator, correctedData, options.regionalLevel);// Draw regions
        renderLabels(gMap,pathGenerator, x, currentTransform,options.regionalLevel); // Draw labels

        // Zoom and pan (semantic zooming included)
        const zoom = d3.zoom()
          .scaleExtent([1, 20])
          .on("zoom", (event) => {
            g.attr("transform", event.transform);
            setCurrentTransform(event.transform);
            //render(correctedData, event.transform);
            renderLabels(gMap,pathGenerator, x, event.transform,options.regionalLevel); // Draw labels
          });

        svg.call(zoom);
        svg.call(zoom.transform, currentTransform);
        svg.on("wheel", (event) => event.preventDefault(), { passive: false });
      } else {
        console.error("Expected GeoJSON of type FeatureCollection, but got:", data.type);
      }
    });
  }, [networkData, options]);

  return (
    <div className="touch-none flex justify-center items-center h-screen w-1/2">
      <svg className="SVGelement w-full h-full bg-[#f8f8f8]" ref={svgRef}></svg>
    </div>
  );
};

export default NetworkMap;
