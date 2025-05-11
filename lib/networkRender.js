    
import * as d3 from "d3"; 
const renderNetwork = (networkData,gNetwork,projection,options,currentTransform) => {
      // Process nodes - transform lat/lon format from JSON to coordinates format
      const processedNodes = networkData.nodes.map(node => ({
        id: node.id,
        coords: [node.lon, node.lat], // Note: order is [longitude, latitude]
        color: node.color || null,
        size: node.size ,
        label: node.label || "",
        type : node.type
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
  
      // Draw links----------------------------------------------
      
      const filteredLinks = graph.links.filter(function(link) {
        if (!link.type) return true;
        const optionName = `show${link.type}`;
        return options[optionName] === undefined || options[optionName] === true;
      });
      gNetwork.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(filteredLinks)
        .enter()
        .append("line")
        .attr("x1", (d) => nodeMap.get(d.source).x)
        .attr("y1", (d) => nodeMap.get(d.source).y)
        .attr("x2", (d) => nodeMap.get(d.target).x)
        .attr("y2", (d) => nodeMap.get(d.target).y)
        .attr("stroke", (d) => d.color || "#aaa")
        .attr("stroke-width", (d) => (d.width || 2)/currentTransform.k);
  
  
      // Draw nodes----------------------------
  
      // Filter nodes based on type conditions in options
      const substationNodes = graph.nodes.filter(function(node) {
        if (!node.type) return true;
        const optionName = `show${node.type}`;
        return options[optionName] === undefined || options[optionName] === true;
      });
      const nodeCircles = gNetwork.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(substationNodes)
        .enter()
        .append("circle")
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y)
        .attr("r", (d) => d.size / currentTransform.k)
        .attr("fill", (d, i) => d.color || d3.schemeCategory10[i % 10]);
  
      // Draw labels
      if(options.showLabels){
        gNetwork.append("g")
        .attr("class", "labels")
        .selectAll("text")
        .data(graph.nodes)
        .enter()
        .append("text")
        .attr("x", (d) => d.x + 0.2)
        .attr("y", (d) => d.y + 0.2)
        .text((d) => d.label)
        .style("font-size", `${12 / currentTransform.k}px`)
        .style("fill", "#000");
      }
  
};

module.exports = {
  renderNetwork
};