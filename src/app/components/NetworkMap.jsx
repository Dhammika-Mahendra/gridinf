"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const NetworkMap = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = 350;
    const height = 600;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("border", "1px solid #ccc");

    svg.selectAll("*").remove();

    const mapGroup = svg.append("g").attr("class", "map-group");
    const linkGroup = svg.append("g").attr("class", "link-group");
    const nodeGroup = svg.append("g").attr("class", "node-group");
    const labelGroup = svg.append("g").attr("class", "label-group");

    const projection = d3.geoMercator()
      .scale(8000)
      .center([80.64, 7.66])
      .translate([165, 330]);

    const pathGenerator = d3.geoPath().projection(projection);

    d3.json("/LK.json").then((geoData) => {
      if (geoData.type === "GeometryCollection") {
        mapGroup.selectAll(".region")
          .data(geoData.geometries)
          .enter()
          .append("path")
          .attr("class", "region")
          .attr("d", pathGenerator)
          .style("fill", "#eee")
          .style("stroke", "#222")
          .style("stroke-width", 0.5);
      } else {
        console.error("Expected GeometryCollection");
      }

      drawNetwork();
    });

    const drawNetwork = () => {
      const graph = {
        nodes: [
          { id: "A", coords: [79.84, 6.90] },
          { id: "B", coords: [80.4, 7.1] },
          { id: "C", coords: [80.5, 8.2] },
          { id: "D", coords: [80.51, 6.9] },
          { id: "E", coords: [80.12, 7.7] },
        ],
        links: [
          { source: "A", target: "B" },
          { source: "A", target: "C" },
          { source: "B", target: "D" },
          { source: "A", target: "E" },
        ],
      };

      const nodeMap = new Map(graph.nodes.map((node) => [node.id, node]));

      graph.nodes.forEach((node) => {
        const [x, y] = projection(node.coords);
        node.x = x;
        node.y = y;
      });

      // Draw links
      linkGroup.selectAll("line")
        .data(graph.links)
        .enter()
        .append("line")
        .attr("x1", (d) => nodeMap.get(d.source).x)
        .attr("y1", (d) => nodeMap.get(d.source).y)
        .attr("x2", (d) => nodeMap.get(d.target).x)
        .attr("y2", (d) => nodeMap.get(d.target).y)
        .attr("stroke", "#aaa")
        .attr("stroke-width", 2);

      // Draw nodes
      const nodes = nodeGroup.selectAll("circle")
        .data(graph.nodes)
        .enter()
        .append("circle")
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y)
        .attr("r", 8)
        .attr("fill", (_, i) => d3.schemeCategory10[i % 10]);

      // Draw labels
      labelGroup.selectAll("text")
        .data(graph.nodes)
        .enter()
        .append("text")
        .attr("x", (d) => d.x + 10)
        .attr("y", (d) => d.y + 5)
        .text((d) => d.id)
        .style("font-size", "12px")
        .style("fill", "#000");
    };

    const zoom = d3.zoom()
      .scaleExtent([1, 8])
      .on("zoom", (event) => {
        // Only zoom map and links
        mapGroup.attr("transform", event.transform);
        linkGroup.attr("transform", event.transform);

        // Keep node positions fixed and inverse scale their size for semantic zoom
        nodeGroup.selectAll("circle")
          .attr("transform", event.transform.toString())
          .attr("r", 8 / event.transform.k);

        labelGroup.selectAll("text")
          .attr("transform", event.transform.toString())
          .style("font-size", `${12 / event.transform.k}px`);

        linkGroup.selectAll("line")
          .attr("stroke-width", 2 / event.transform.k);
      });

    svg.call(zoom);

    svg.on("wheel", (event) => event.preventDefault(), { passive: false });
  }, []);

  return (
    <div style={{ touchAction: "none" }}>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default NetworkMap;
