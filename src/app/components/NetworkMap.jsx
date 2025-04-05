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

    svg.selectAll("*").remove(); // Clear SVG before drawing

    // Root group to apply zoom
    const g = svg.append("g");

    // Separate layers
    const gMap = g.append("g").attr("class", "map-layer");
    const gNetwork = g.append("g").attr("class", "network-layer");

    // Projection setup
    const projection = d3.geoMercator()
      .scale(8000)
      .center([80.64, 7.66])
      .translate([165, 330]);

    const pathGenerator = d3.geoPath().projection(projection);

    // Load GeoJSON and draw map
    d3.json("/LK.json").then((geoData) => {
      if (geoData.type === "GeometryCollection") {
        gMap.selectAll(".region")
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

      // After map load, draw network
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

      const nodeMap = new Map(graph.nodes.map((n) => [n.id, n]));

      // Project geo coords
      graph.nodes.forEach((node) => {
        const [x, y] = projection(node.coords);
        node.x = x;
        node.y = y;
      });

      // Draw links
      gNetwork.append("g")
        .attr("class", "links")
        .selectAll("line")
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
      const nodeCircles = gNetwork.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(graph.nodes)
        .enter()
        .append("circle")
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y)
        .attr("r", 8)
        .attr("fill", (_, i) => d3.schemeCategory10[i % 10]);

      // Hover effect
      nodeCircles
        .on("mouseover", function () {
          d3.select(this).transition().duration(200).attr("r", 12);
        })
        .on("mouseout", function () {
          d3.select(this).transition().duration(200).attr("r", 8);
        });

      // Draw labels
      gNetwork.append("g")
        .attr("class", "labels")
        .selectAll("text")
        .data(graph.nodes)
        .enter()
        .append("text")
        .attr("x", (d) => d.x + 10)
        .attr("y", (d) => d.y + 5)
        .text((d) => d.id)
        .style("font-size", "12px")
        .style("fill", "#000");
    };

    // Zoom and pan
    const zoom = d3.zoom()
      .scaleExtent([1, 8])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);

        // Semantic zoom (optional)
        const k = event.transform.k;
        gNetwork.selectAll("circle").attr("r", 8 / k);
        gNetwork.selectAll("text").style("font-size", `${12 / k}px`);
        gNetwork.selectAll("line").attr("stroke-width", 2 / k);
      });

    svg.call(zoom);

    // Prevent scroll wheel page scroll
    svg.on("wheel", (event) => event.preventDefault(), { passive: false });
  }, []);

  return (
    <div style={{ touchAction: "none" }}>
      <svg className="SVGelement" ref={svgRef}></svg>
    </div>
  );
};

export default NetworkMap;
