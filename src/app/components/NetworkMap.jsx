"use client";

import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const NetworkMap = () => {
  const svgRef = useRef(null);
  const [networkData, setNetworkData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the network data from external JSON file
    const fetchNetworkData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/data.json"); // Path to your network data JSON
        if (!response.ok) {
          throw new Error(`Failed to fetch network data: ${response.status}`);
        }
        const data = await response.json();
        setNetworkData(data);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching network data:", err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchNetworkData();
  }, []);

  useEffect(() => {
    // Only render the visualization when network data is available
    if (!networkData || isLoading) return;

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
      // Process nodes - transform lat/lon format from JSON to coordinates format
      const processedNodes = networkData.nodes.map(node => ({
        id: node.id,
        coords: [node.lon, node.lat], // Note: order is [longitude, latitude]
        color: node.color || null,
        size: node.size ,
        label: node.label || node.id
      }));

      const graph = {
        nodes: processedNodes,
        links: networkData.links
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
        .attr("stroke", (d) => d.color || "#aaa")
        .attr("stroke-width", (d) => d.width || 2);

      // Draw nodes
      const nodeCircles = gNetwork.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(graph.nodes)
        .enter()
        .append("circle")
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y)
        .attr("r", (d) => d.size)
        .attr("fill", (d, i) => d.color || d3.schemeCategory10[i % 10]);

      // Hover effect
      nodeCircles
        .on("mouseover", function (event, d) {
          d3.select(this).transition().duration(200).attr("r", d.size * 1.5);
        })
        .on("mouseout", function (event, d) {
          d3.select(this).transition().duration(200).attr("r", d.size);
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
        .text((d) => d.label)
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
        gNetwork.selectAll("circle").attr("r", (d) => d.size / k);
        gNetwork.selectAll("text").style("font-size", `${12 / k}px`);
        gNetwork.selectAll("line").attr("stroke-width", (d) => (d.width || 2) / k);
      });

    svg.call(zoom);

    // Prevent scroll wheel page scroll
    svg.on("wheel", (event) => event.preventDefault(), { passive: false });
  }, [networkData, isLoading]);

  if (error) {
    return <div>Error loading network data: {error}</div>;
  }

  if (isLoading) {
    return <div>Loading network data...</div>;
  }

  return (
    <div style={{ touchAction: "none" }}>
      <svg className="SVGelement" ref={svgRef}></svg>
    </div>
  );
};

export default NetworkMap;