"use client";
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import rewind from '@turf/rewind';
import { renderRegions , renderLabels } from "../../../lib/mapRender";
import { renderNetwork, renderNetworkLabels ,updateLabels} from "../../../lib/networkRender";

const NetworkMap = ({ options, data }) => {
  const svgRef = useRef(null);
  const [networkData, setNetworkData] = useState(data);
  const [currentTransform, setCurrentTransform] = useState(d3.zoomIdentity);


  // Main rendering function
  useEffect(() => {
    const width = window.innerWidth * 0.8;
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
    const gNetwork = g.append("g").attr("class", "network-layer");

    // Projection setup
    const projection = d3.geoMercator()
      .scale(8000)
      .center([80.64, 7.66])
      .translate([width / 2, height / 2+ 40]);
    const pathGenerator = d3.geoPath().projection(projection);

    let x;
    let y;
    let graphData;
    let graphLabelData;

    // Load GeoJSON and draw map
    d3.json("/Map.json").then((data) => {
      if (data.type === "FeatureCollection") {
        const correctedFeatures = data.features.map(feature => rewind(feature, { reverse: true }));
        const correctedData = { ...data, features: correctedFeatures };

        //pre processed data object for  network digram
        const processedNodes = networkData.nodes.map(node => ({
          id: node.id,
          coords: [node.lon, node.lat],
          color: node.color || null,
          size: node.size ,
          label: node.name || "",
          type : node.type
        }));
    
        graphData = {
          nodes: processedNodes,
          links: networkData.links
        };

        graphData.nodes.forEach((node) => {
          const [x, y] = projection(node.coords);
          node.x = x;
          node.y = y;
        });

        // Filter nodes based on options.show configuration
        graphLabelData = processedNodes.filter(node => {
          return options[`show${node.type}`] === true;  
        });
        
        console.log(graphLabelData);

        gMap.selectAll("*").remove();
        x = renderRegions(gMap,pathGenerator, correctedData, options.regionalLevel);// Draw regions
        if(options.showRegionLabels){
          renderLabels(gMap,pathGenerator, x, currentTransform,options.regionalLevel); // Draw labels
        }
        y= renderNetworkLabels(graphLabelData, gNetwork,options,currentTransform);


        // Zoom and pan (semantic zooming included)
        const zoom = d3.zoom()
          .scaleExtent([1, 20])
          .on("zoom", (event) => {
            g.attr("transform", event.transform);
            setCurrentTransform(event.transform);
            const k = event.transform.k;
            gNetwork.selectAll("circle").attr("r", (d) => d.size / k);
            gNetwork.selectAll("text").style("font-size", `${10 / k}px`);
            gNetwork.selectAll("line").attr("stroke-width", (d) => (d.width || 2) / k);
            if(options.showRegionLabels){
              renderLabels(gMap,pathGenerator, x, event.transform,options.regionalLevel);
            }
            if(options.showNetworkLabels){
              updateLabels(y,currentTransform.k)
            }
            
          });

        svg.call(zoom);
        svg.call(zoom.transform, currentTransform);
        svg.on("wheel", (event) => event.preventDefault(), { passive: false });
      } else {
        console.error("Expected GeoJSON of type FeatureCollection, but got:", data.type);
      }

      renderNetwork(graphData,gNetwork,options,currentTransform);
    });

  }, [networkData, options]);



  return (
    <div className="touch-none flex justify-center items-center h-screen w-[80vw]">
      <svg className="SVGelement w-full h-full bg-[#f8f8f8]" ref={svgRef}></svg>
    </div>
  );
};

export default NetworkMap;
