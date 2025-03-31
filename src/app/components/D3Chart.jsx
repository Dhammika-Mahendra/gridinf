"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

const D3Chart = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = 600;
    const height = 400;

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

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    svg.selectAll("*").remove(); // Clear previous content

    const g = svg.append("g");

    const nodeMap = new Map(graph.nodes.map((node) => [node.id, node]));

    // Draw links
    g.append("g")
      .attr("stroke", "#aaa")
      .selectAll("line")
      .data(graph.links)
      .join("line")
      .attr("x1", (d) => nodeMap.get(d.source).x)
      .attr("y1", (d) => nodeMap.get(d.source).y)
      .attr("x2", (d) => nodeMap.get(d.target).x)
      .attr("y2", (d) => nodeMap.get(d.target).y)
      .attr("stroke-width", 2);

    // Draw nodes
    g.append("g")
      .selectAll("circle")
      .data(graph.nodes)
      .join("circle")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", 10)
      .attr("fill", (_, i) => d3.schemeCategory10[i % 10]);

    // Add labels
    g.append("g")
      .selectAll("text")
      .data(graph.nodes)
      .join("text")
      .attr("x", (d) => d.x + 12)
      .attr("y", (d) => d.y + 4)
      .text((d) => d.id)
      .style("font-size", "14px")
      .style("fill", "#333");

    // Zoom behavior
    const zoom = d3.zoom()
      .scaleExtent([0.5, 3]) // Zoom limits
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom);

    // Prevent default scroll behavior on the page
    svg.on("wheel", (event) => event.preventDefault(), { passive: false });

  }, []);

  return (
    <div
      className="graph-container"
      style={{ width: "600px", height: "400px", overflow: "hidden", border: "1px solid #ccc" }}
    >
      <svg
        ref={svgRef}
        className="d3-graph"
        style={{
          border: "1px solid #ccc",
          width: "100%",
          height: "100%",
        }}
      ></svg>
    </div>
  );
};

export default D3Chart;
