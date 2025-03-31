"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

const D3Chart = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = 600;
    const height = 400;

    // Define fixed positions for nodes
    const graph = {
      nodes: [
        { id: "A", x: 100, y: 100 },
        { id: "B", x: 300, y: 100 },
        { id: "C", x: 200, y: 200 },
        { id: "D", x: 400, y: 200 },
        { id: "E", x: 300, y: 300 },
      ],
      links: [
        { source: "A", target: "B" },
        { source: "A", target: "C" },
        { source: "B", target: "D" },
        { source: "C", target: "D" },
        { source: "D", target: "E" },
      ],
    };

    // Select the SVG element
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Create a lookup for nodes by ID
    const nodeMap = new Map(graph.nodes.map(node => [node.id, node]));

    // Draw links (edges)
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

    // Draw nodes (circles)
    svg.append("g")
      .selectAll("circle")
      .data(graph.nodes)
      .enter().append("circle")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .attr("r", 10)
      .attr("fill", (_, i) => d3.schemeCategory10[i]);

    // Add labels to nodes
    svg.append("g")
      .selectAll("text")
      .data(graph.nodes)
      .enter().append("text")
      .attr("x", d => d.x + 12)
      .attr("y", d => d.y + 4)
      .text(d => d.id)
      .style("font-size", "14px")
      .style("fill", "#333");

  }, []);

  return <svg ref={svgRef}></svg>;
};

export default D3Chart;
