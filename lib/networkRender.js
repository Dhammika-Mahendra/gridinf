import * as d3 from "d3"; 

const renderNetwork = (graphData, gNetwork, options, currentTransform) => {
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

// Helper function to calculate label bounding box
function getLabelBounds(d, fontSize, zoomLevel) {
    // Tighter bounds at higher zoom levels
    const zoomFactor = Math.min(zoomLevel / 5, 1); // Normalize zoom
    const basePadding = 0.5;
    const padding = basePadding * (1 - zoomFactor * 0.9); // Reduce padding when zoomed in
    
    const charWidthMultiplier = 0.3 + (zoomFactor * 0.1); // Slightly wider at high zoom
    const heightMultiplier = 0.6;
    
    const textLength = d.label.length * fontSize * charWidthMultiplier;
    const textHeight = fontSize * heightMultiplier;
    
    return {
        x: d.x - padding,
        y: d.y - textHeight - padding,
        width: textLength + (padding * 2),
        height: textHeight + (padding * 2)
    };
}

// Helper function to check if two bounding boxes overlap
function isOverlapping(box1, box2) {
    return !(box1.x + box1.width < box2.x || 
             box2.x + box2.width < box1.x || 
             box1.y + box1.height < box2.y || 
             box2.y + box2.height < box1.y);
}

// Function to determine which labels should be visible based on collision detection
function getVisibleLabels(graphData, currentTransform) {
  const fontSize = 10 / currentTransform.k;
  const zoomLevel = currentTransform.k; // Pass zoom level
  
  const sortedData = [...graphData].sort((a, b) => {
      const aId = typeof a.id === 'string' ? parseInt(a.id.replace(/\D/g, '')) || a.id : a.id;
      const bId = typeof b.id === 'string' ? parseInt(b.id.replace(/\D/g, '')) || b.id : b.id;
      return aId - bId;
  });
  
  const visibleLabels = [];
  const occupiedBounds = [];
  
  for (const node of sortedData) {
      const bounds = getLabelBounds(node, fontSize, zoomLevel); // Pass zoom level
      
      const hasCollision = occupiedBounds.some(existingBounds => 
          isOverlapping(bounds, existingBounds)
      );
      
      if (!hasCollision) {
          visibleLabels.push(node);
          occupiedBounds.push(bounds);
      }
  }
  
  return visibleLabels;
}

function renderNetworkLabels(graphData, gNetwork, options, currentTransform) {
    if (!options.showNodeLabels) {
        return null;
    }

    const labelsGroup = gNetwork.append("g").attr("class", "labels");
    
    // Create all label elements but make them initially invisible
    const allLabels = labelsGroup
        .selectAll("text")
        .data(graphData)
        .enter()
        .append("text")
        .attr("x", (d) => d.x + 1.5 / currentTransform.k)
        .attr("y", (d) => d.y)
        .text((d) => d.label)
        .style("font-size", `${10 / currentTransform.k}px`)
        .style("fill", "#000")
        .style("opacity", 0)
        .attr("data-node-id", (d) => d.id);
    
    // Update visibility based on collision detection
    updateLabelsVisibility(labelsGroup, graphData, currentTransform);
    
    return labelsGroup;
}

function updateLabelsVisibility(labelsGroup, graphData, currentTransform) {
    if (!labelsGroup) return;
    
    const visibleLabels = getVisibleLabels(graphData, currentTransform);
    const visibleIds = new Set(visibleLabels.map(d => d.id));
    
    // Update all labels visibility
    labelsGroup.selectAll("text")
        .style("opacity", function(d) {
            return visibleIds.has(d.id) ? 1 : 0;
        })
        .style("font-size", `${10 / currentTransform.k}px`)
        .attr("x", (d) => d.x + 1.5 / currentTransform.k);
}

// New function to update labels during zoom
function updateLabels(labelsGroup, graphData, currentTransform) {
    updateLabelsVisibility(labelsGroup, graphData, currentTransform);
}

module.exports = {
    renderNetwork,
    renderNetworkLabels,
    updateLabels,
    updateLabelsVisibility
};