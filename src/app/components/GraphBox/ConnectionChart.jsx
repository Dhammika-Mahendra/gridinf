import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export default function ConnectionChart({data}) {
  const svgRef = useRef(null);

  useEffect(() => {

    d3.select(svgRef.current).selectAll("*").remove();

    // Chart dimensions
    const margin = { top: 60, right: 25, bottom: 30, left: 25 };
    const width = parseInt(window.innerWidth * 0.3) - margin.left - margin.right;
    const height = 2600 - margin.top - margin.bottom;

    // Create SVG element
    const svg = d3.select(svgRef.current)
      .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Define fixed heights for each dimension
    const dimensionHeights = {
      "gen": 2550,
      "220": 2550,
      "int": 2550,
      "132": 2550,
      "33": 2550,
      "11": 2550,
    };
    // Define dimensions for parallel coordinates
    const dimensions = ["gen", "220","int", "132","33","11"];

    // Build the X scale (horizontal spacing between dimension lines)
    const x = d3.scalePoint()
    .range([0, width])
    .domain(dimensions);
    
    //-------------------------------------------------------------------------------
    //             Verticle scale
    //-------------------------------------------------------------------------------

    for (const dimension of dimensions) {
      const dimHeight = dimensionHeights[dimension];
      
      // Create a vertical line
      svg.append("line")
        .attr("x1", x(dimension))
        .attr("y1", 0)
        .attr("x2", x(dimension))
        .attr("y2", dimHeight)
        .attr("class", "dimension-line")
        .attr("data-name", dimension)
        .attr("data-height", dimHeight)
        .style("stroke", dimension === "gen" || dimension === "int" ? "#eee" : "#000")
        .style("stroke-width", 3)
        .style("opacity", 0.7)
        .style("cursor", "pointer")
        .on("mouseover", function() {
          d3.select(this).style("stroke-width", 6);
          console.log(d3.select(this).attr("data-name"));
        })
        .on("mouseout", function() {
          d3.select(this).style("stroke-width", 3);
        });
        
      // lables
      // svg.append("text")
      //   .attr("x", x(dimension))
      //   .attr("y", -20)
      //   .attr("text-anchor", "mid")
      //   .attr("fill", "#000")
      //   .style("font-weight", "regular")
      //   .text(dimension);
    }

    //--------------------------------------------------------------------------------
    //            Connection lines
    //--------------------------------------------------------------------------------
    data.forEach((d, i) => {
      const color = d3.schemeCategory10[i % 10];

      d.segments.forEach(segment => {
        const fromDim = segment.from;
        const toDim = segment.to;
        const iconPosition = segment.iconPosition || "none";
        const label = segment.label || "";
        const labelPosition = segment.labelPosition || 0.5;
        const conName = segment.conId;
        
        // Line endpoints 
        const x1 = x(fromDim);
        const y1 = d[fromDim]; // Direct pixel position
        const x2 = x(toDim);
        const y2 = d[toDim]; // Direct pixel position
        
        // Draw the connection line
        svg.append("line")
          .attr("x1", x1)
          .attr("y1", y1)
          .attr("x2", x2)
          .attr("y2", y2)
          .attr("class", "connection-line")
          .attr("data-name", conName)
          .attr("data-from-dim", fromDim)
          .attr("data-to-dim", toDim)
          .attr("data-from-pos", y1)
          .attr("data-to-pos", y2)
          .style("stroke", "red")
          .style("stroke-width", 2)
          .style("opacity", 0.8)
          .style("cursor", "pointer")
        
        // Calculate icon position based on specified placement
        let iconX, iconY;
        
        switch(iconPosition) {
          case "start":
            iconX = x1;
            iconY = y1;
            break;
          case "mid":
            iconX = (x1 + x2) / 2;
            iconY = (y1 + y2) / 2;
            break;
          case "end":
            iconX = x2;
            iconY = y2;
            break;
          default:
            // No icon if position not specified
            break;
        }
        
        // Icons
        if (iconPosition && iconPosition !== "none") {
          svg.append("circle")
            .attr("cx", iconX)
            .attr("cy", iconY)
            .attr("r", 6)
            .attr("class", "segment-icon")
            .attr("data-name", conName)
            .style("fill", "white")
            .style("stroke", "red")
            .style("stroke-width", 2)
            .style("cursor", "pointer")
            .on("mouseover", function() {
              d3.select(this).style("stroke-width", 4).style("r", 8);
              
              // Determine which dimension(s) and position this icon is related to
              let positionInfo = "";
              if (iconPosition === "start") {
                positionInfo = `${fromDim}:${y1}px`;
              } else if (iconPosition === "end") {
                positionInfo = `${toDim}:${y2}px`;
              } else {
                positionInfo = `Between ${fromDim}:${y1}px and ${toDim}:${y2}px`;
              }
              
              console.log(`${conName}`);
            })
            .on("mouseout", function() {
              d3.select(this).style("stroke-width", 2).style("r", 6);
            });
        }
        
        // Lable
        if (label) {
          // Calculate label position 
          const labelX = x1 + (x2 - x1) * labelPosition;
          const labelY = y1 + (y2 - y1) * labelPosition;
        
          svg.append("text")
            .attr("x", labelX-10)
            .attr("y", labelY + 18)
            .attr("text-anchor", "mid")
            .attr("fill", "black")
            .style("font-size", "11px")
            .style("font-weight", "regular")
            .text(label);
        }
        
      });
    });

  }, []);

  return (
      <div className="w-[30vw] overflow-y-scroll" style={{ maxHeight: '95vh' }}>
        <svg ref={svgRef} className="w-full h-full"></svg>
      </div>
  );
}