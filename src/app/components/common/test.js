// In your NextJS component
import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { 
  layoutGreedy, 
  layoutAnnealing, 
  layoutTextLabel, 
  layoutRemoveOverlaps 
} from 'd3fc-label-layout';

const MapWithLabels = ({ geoJsonData, width, height }) => {
  const svgRef = useRef(null);
  const [currentZoom, setCurrentZoom] = useState(1);
  
  useEffect(() => {
    if (!geoJsonData || !svgRef.current) return;
    
    const svg = d3.select(svgRef.current);
    
    // Clear previous content
    svg.selectAll("*").remove();
    
    // Create a container for map and labels
    const container = svg.append("g");
    
    // Set up projection and path generator
    const projection = d3.geoMercator()
      .fitSize([width, height], geoJsonData);
    
    const path = d3.geoPath().projection(projection);
    
    // Set up zoom behavior
    const zoom = d3.zoom()
      .scaleExtent([1, 8])
      .on("zoom", (event) => {
        container.attr("transform", event.transform);
        setCurrentZoom(event.transform.k);
        updateLabels(event.transform.k);
      });
    
    svg.call(zoom);
    
    // Draw regions
    container.selectAll("path")
      .data(geoJsonData.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", "#ccc")
      .attr("stroke", "#fff");
    
    // Extract centroids for labels
    const labels = geoJsonData.features.map(feature => {
      const centroid = path.centroid(feature);
      const bounds = path.bounds(feature);
      // Calculate region size to prioritize larger regions
      const size = Math.abs((bounds[1][0] - bounds[0][0]) * (bounds[1][1] - bounds[0][1]));
      
      return {
        x: centroid[0],
        y: centroid[1],
        width: feature.properties.name.length * 6, // Approximate text width
        height: 14, // Approximate text height
        text: feature.properties.name,
        size: size  // Store region size for priority
      };
    });
    
    // Create a container for labels
    const labelsGroup = container.append("g")
      .attr("class", "labels");
    
    // Function to update labels based on zoom level
    const updateLabels = (zoomLevel) => {
      // Filter labels based on zoom level and region size
      const visibleLabels = labels.filter(label => {
        // Show larger regions at lower zoom levels, show more as we zoom in
        const zoomThreshold = Math.max(1, 8 - label.size / 5000);
        return zoomLevel >= zoomThreshold;
      });
      
      // Configure layout strategy - use different strategies based on zoom
      let strategy;
      
      if (zoomLevel < 2) {
        // At low zoom, just handle the largest regions with minimal overlap removal
        strategy = layoutGreedy()
          .size((d) => [d.width, d.height])
          .position((d) => [d.x, d.y])
          .component(layoutTextLabel());
      } else if (zoomLevel < 4) {
        // Medium zoom, more aggressive overlap handling
        strategy = layoutAnnealing()
          .size((d) => [d.width, d.height])
          .position((d) => [d.x, d.y])
          .component(layoutTextLabel())
          .temperature(1)
          .cooling(0.95)
          .iterations(100);
      } else {
        // High zoom, allow more labels with focused overlap removal
        strategy = layoutRemoveOverlaps()
          .size((d) => [d.width, d.height])
          .position((d) => [d.x, d.y])
          .component(layoutTextLabel());
      }
      
      // Apply the layout strategy
      const layoutData = strategy(visibleLabels);
      
      // Bind labels to DOM
      const labelSelection = labelsGroup.selectAll("text")
        .data(layoutData, d => d.text);
      
      // Remove old labels
      labelSelection.exit().remove();
      
      // Add new labels
      labelSelection.enter()
        .append("text")
        .attr("x", d => d.x)
        .attr("y", d => d.y)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "central")
        .attr("font-size", d => Math.min(12 * (currentZoom / 2), 14))
        .text(d => d.text)
        .style("pointer-events", "none")
        .style("opacity", d => d.hidden ? 0 : 1);
      
      // Update existing labels
      labelSelection
        .attr("x", d => d.x)
        .attr("y", d => d.y)
        .attr("font-size", d => Math.min(12 * (currentZoom / 2), 14))
        .style("opacity", d => d.hidden ? 0 : 1);
    };
    
    // Initial label rendering
    updateLabels(1);
    
  }, [geoJsonData, width, height]);
  
  return (
    <div className="map-container">
      <svg ref={svgRef} width={width} height={height}></svg>
    </div>
  );
};

export default MapWithLabels;