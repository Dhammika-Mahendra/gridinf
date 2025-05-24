    
import * as d3 from "d3"; 
const renderNetwork = (graphData, gNetwork,options,currentTransform) => {

      const nodeMap = new Map(graphData.nodes.map((n) => [n.id, n]));

      // Draw links----------------------------------------------
      
      const filteredLinks = graphData.links.filter(function(link) {
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
      const substationNodes = graphData.nodes.filter(function(node) {
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

};

function renderNetworkLabels(graphData,gNetwork,options,currentTransform){


       if(options.showNodeLabels){
        return gNetwork.append("g")
        .attr("class", "labels")
        .selectAll("text")
        .data(graphData)
        .enter()
        .append("text")
        .attr("x", (d) => `${d.x + 1.5 / currentTransform.k}`)
        .attr("y", (d) => d.y )
        .text((d) => d.label)
        .style("font-size", `${10 / currentTransform.k}px`)
        .style("fill", "#000");
      }

}
  
module.exports = {
  renderNetwork ,renderNetworkLabels
};