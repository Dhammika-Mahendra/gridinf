    
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

const collides = (a, b) => {
  return a.x < b.x + b.width &&
         a.x + a.width > b.x &&
         a.y < b.y + b.height &&
         a.y + a.height > b.y;
};

  const updateLabels = (selection,currentScale) => {
    const labels = selection
    const bboxes = new Map();
    console.log(labels);
    
    // First pass: calculate all bounding boxes
    labels.each(function(d) {
      const node = d3.select(this);
      const bbox = this.getBBox();
      bboxes.set(d.id, {
        x: parseFloat(node.attr('x')),
        y: parseFloat(node.attr('y')),
        width: bbox.width,
        height: bbox.height,
        priority: d.id
      });
    });

    // Create quadtree for collision detection
    const quadtree = d3.quadtree()
      .x(d => d.x)
      .y(d => d.y)
      .addAll([...bboxes.values()]);

    // Second pass: detect collisions and hide labels
    labels.each(function(current) {
      const currentData = bboxes.get(current.id);
      let isVisible = true;
      
      quadtree.visit((quad, x1, y1, x2, y2) => {
        if (!quad.length) {
          let other = quad.data;
          if (other && other !== currentData) {
            if (collides(currentData, other)) {
              // Compare priorities (lower ID = higher priority)
              isVisible = currentData.priority < other.priority;
              return isVisible; // Stop checking if current is higher priority
            }
          }
        }
        return false;
      });

      // Hide labels when zoomed out beyond threshold
      const visibility = currentScale < 0.5 ? 'none' : 
        isVisible ? 'initial' : 'none';
      d3.select(this).style('display', visibility);
    });
  };

  
module.exports = {
  renderNetwork ,renderNetworkLabels, updateLabels
};