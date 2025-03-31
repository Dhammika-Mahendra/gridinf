"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";

const D3Chart = () => {
  const svgRef = useRef(null);
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    const width = 800;
    const height = 500;

    // Load GeoJSON map
    d3.json("/LK.geojson").then(setGeoData);
    
    if (!geoData) return;

    const projection = d3.geoMercator()
      .fitSize([width, height], geoData);

    const pathGenerator = d3.geoPath().projection(projection);

    // Select the SVG element
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Draw map background
    svg.append("g")
      .selectAll("path")
      .data(geoData.features)
      .enter().append("path")
      .attr("d", pathGenerator)
      .attr("fill", "#ddd")
      .attr("stroke", "#888");

    // Chart nodes and links
    const graph = {
      nodes: [
        { id: "A", x: 200, y: 250 },
        { id: "B", x: 400, y: 150 },
        { id: "C", x: 600, y: 300 },
      ],
      links: [
        { source: "A", target: "B" },
        { source: "B", target: "C" },
      ],
    };

    const nodeMap = new Map(graph.nodes.map(node => [node.id, node]));

    // Draw links
    svg.append("g")
      .attr("stroke", "#aaa")
      .selectAll("line")
      .data(graph.links)
      .enter().append("line")
      .attr("x1", d => nodeMap.get(d.source).x)
      .attr("y1", d => nodeMap.get(d.source).y)
      .attr("x2", d => nodeMap.get(d.target).x)
      .attr("y2", d => nodeMap.get(d.target).y)
      .attr("stroke-width", 2);

    // Draw nodes
    svg.append("g")
      .selectAll("circle")
      .data(graph.nodes)
      .enter().append("circle")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .attr("r", 10)
      .attr("fill", "blue");

  }, [geoData]);

  return <svg ref={svgRef}></svg>;
};

export default D3Chart;
