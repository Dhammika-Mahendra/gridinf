import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const NetworkDiagram = ({ data }) => {
  const svgRef = useRef(null);
  const zoom = d3.zoom().scaleExtent([0.1, 5]).on('zoom', handleZoom);
  
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    initializeDiagram(svg);
    svg.call(zoom);
  }, []);

  const initializeDiagram = (svg) => {
    // Create nodes and labels (static positions)
    const nodes = svg.selectAll('.node')
      .data(data.nodes)
      .enter().append('g')
        .attr('class', 'node')
        .attr('transform', d => `translate(${d.x},${d.y})`);

    nodes.append('circle').attr('r', 5);
    
    const labels = nodes.append('text')
      .text(d => d.label)
      .attr('class', 'label')
      .attr('priority', d => d.id) // Lower ID = higher priority
      .style('display', 'initial');

    // Create static links
    svg.selectAll('.link')
      .data(data.links)
      .enter().append('line')
        .attr('class', 'link')
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);
  };

  const handleZoom = (event) => {
    const transform = event.transform;
    const svg = d3.select(svgRef.current);
    
    // Update node positions with zoom transform
    svg.selectAll('.node')
      .attr('transform', d => `
        translate(
          ${transform.applyX(d.x)},
          ${transform.applyY(d.y)}
        )
      `);

    // Update link positions
    svg.selectAll('.link')
      .attr('x1', d => transform.applyX(d.source.x))
      .attr('y1', d => transform.applyY(d.source.y))
      .attr('x2', d => transform.applyX(d.target.x))
      .attr('y2', d => transform.applyY(d.target.y));

    handleLabelCollision(transform.k);
  };

  const handleLabelCollision = (currentScale) => {
    const labels = d3.selectAll('.label');
    const bboxes = new Map();
    
    // First pass: calculate all bounding boxes
    labels.each(function(d) {
      const node = d3.select(this);
      const bbox = this.getBBox();
      bboxes.set(d.properties.id, {
        x: parseFloat(node.attr('x')),
        y: parseFloat(node.attr('y')),
        width: bbox.width,
        height: bbox.height,
        priority: d.properties.id
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

  const collides = (a, b) => {
    return a.x < b.x + b.width &&
           a.x + a.width > b.x &&
           a.y < b.y + b.height &&
           a.y + a.height > b.y;
  };

  return <svg ref={svgRef} width={800} height={600} />;
};
