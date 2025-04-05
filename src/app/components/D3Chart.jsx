"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

const D3Chart = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = 350;
    const height = 600;

    const graph = {
      nodes: [
        { id: "A", x: 100, y: 300 },
        { id: "B", x: 300, y: 300 },
        { id: "C", x: 200, y: 400 },
        { id: "D", x: 300, y: 200 },
        { id: "E", x: 300, y: 500 },
      ],
      links: [
        { source: "A", target: "B" },
        { source: "A", target: "C" },
        { source: "B", target: "D" },
        { source: "A", target: "E" }
      ],
    };

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .style("max-width", "100%")
      .style("height", "auto")
      .style("border", "1px solid #ccc");

    svg.selectAll("*").remove(); // Clear previous content
    

    const g = svg.append("g");

    const nodeMap = new Map(graph.nodes.map((node) => [node.id, node]));

    // Draw links
    const link = g
      .append("g")
      .attr("stroke", "#aaa")
      .attr("stroke-width", 2)
      .selectAll("line")
      .data(graph.links)
      .join("line")
      .attr("x1", (d) => nodeMap.get(d.source).x)
      .attr("y1", (d) => nodeMap.get(d.source).y)
      .attr("x2", (d) => nodeMap.get(d.target).x)
      .attr("y2", (d) => nodeMap.get(d.target).y);

    // Draw nodes
    const node = g
      .append("g")
      .selectAll("circle")
      .data(graph.nodes)
      .join("circle")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", 10)
      .attr("fill", (_, i) => d3.schemeCategory10[i % 10]);

      node.on("mouseover", function () {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", 15); // Increase radius on hover
      })
      .on("mouseout", function () {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", 10); // Revert to original radius
      });

    // Add labels
    const label = g
      .append("g")
      .selectAll("text")
      .data(graph.nodes)
      .join("text")
      .attr("x", (d) => d.x + 12)
      .attr("y", (d) => d.y + 4)
      .text((d) => d.id)
      .style("font-size", "14px")
      .style("fill", "#333");

    // Zoom behavior
    const zoom = d3
      .zoom()
      .scaleExtent([0.5, 3]) // Zoom limits
      .on("zoom", (event) => {
        const { transform } = event;

        // Update positions of nodes and links based on transform
        node.attr("cx", (d) => transform.applyX(d.x))
            .attr("cy", (d) => transform.applyY(d.y));

        link.attr("x1", (d) => transform.applyX(nodeMap.get(d.source).x))
            .attr("y1", (d) => transform.applyY(nodeMap.get(d.source).y))
            .attr("x2", (d) => transform.applyX(nodeMap.get(d.target).x))
            .attr("y2", (d) => transform.applyY(nodeMap.get(d.target).y));

        label.attr("x", (d) => transform.applyX(d.x) + 12)
             .attr("y", (d) => transform.applyY(d.y) + 4);
      });

    svg.call(zoom);

    // Prevent default scroll behavior on the page
    svg.on("wheel", (event) => event.preventDefault(), { passive: false });

  }, []);

  return (
    <div
      className="graph-container"
      style={{ width: "350px", height: "600px", overflow: "hidden", border: "1px solid #000" }}
    >
      <svg
        ref={svgRef}
        className="svgClass"
        style={{
          width: "100%",
          height: "100%",
        }}
      ></svg>
    </div>
  );
};

export default D3Chart;
