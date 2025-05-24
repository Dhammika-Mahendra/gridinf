import * as topojson from 'topojson-client';
import { topology } from 'topojson-server';
import rewind from '@turf/rewind';
import { every } from 'd3';

//=========================================================================
//               Custom made functions for map rendering
//=========================================================================

const colorCode ={1: "#C0C0C0", 2: "#A9A9A9", 3: "#B2BEB5", 4: "#D7D7D7", "LECO": "#808080"};
function renderRegions(gMap,pathGenerator,featureData,regionalLevel) {

  let data = renderMap(featureData,regionalLevel);
  
  gMap.selectAll(".region")
  .data(data.features)
  .enter()
  .append("path")
  .attr("class", "region")
  .attr("d", pathGenerator)
  .style("fill",  d => {
    let divCode = d.properties.Division_Code;
    return colorCode[divCode] || "#eee";
  })
  .style("stroke", "#222")
  .style("stroke-width", 0.1);

  return data;
}

function renderRegionLabels(gMap,pathGenerator,featureData,transform,regionalLevel) {
  if(regionalLevel !== 'Country') {
    gMap.selectAll(".region-label").remove(); // Clear existing labels
  gMap.selectAll(".region-label").remove(); // Clear existing labels

  let labels = featureData.features.map(d => {
    const [x, y] = pathGenerator.centroid(d);
    return {
      x,
      y,
      text: regionalLevel === 'Province' ? d.properties.Province_Code :
             regionalLevel === 'Division' ? d.properties.Division_Code :
             d.properties.Area_Name,
      fid: d.properties.fid,
      feature: d
    };
  });

    // Sort by fid (lower fid = higher priority; change if needed)
  labels.sort((a, b) => a.fid - b.fid);

  // Greedy placement: hide overlapping labels
  const placed = [];
  const fontSize = 10 / (transform?.k || 1);
  labels.forEach(label => {
    // Estimate label size (could use getBBox, but not available before rendering)
    const width = label.text.length * fontSize * 0.6;
    const height = fontSize;
    const bbox = {
      x: label.x - width / 2,
      y: label.y - height / 2,
      width,
      height
    };
    // Check overlap with already placed labels
    if (!placed.some(p => rectsOverlap(bbox, p.bbox))) {
      placed.push({ ...label, bbox });
    }
  });

  // Render only non-overlapping labels
  gMap.selectAll(".region-label")
    .data(placed)
    .enter()
    .append("text")
    .attr("class", "region-label")
    .attr("x", d => d.x)
    .attr("y", d => d.y)
    .attr("text-anchor", "middle")
    .attr("dy", ".35em")
    .style("font-size", `${fontSize}px`)
    .style("fill", "#8c7272")
    .text(d => d.text);
  }
}

function rectsOverlap(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

function renderMap(data,regionalLevel){

    let finalFeatures = [];
        
    switch(regionalLevel) {
      case "Country":
        // Merge all features into one
        finalFeatures = mergeFeaturesByProperty(data.features, 'Country', true);
        break;
      
      case "Division":
        // Merge by Division_Code
        finalFeatures = mergeFeaturesByProperty(data.features, 'Division_Code');
        break;
      
      case "Province":
        // Merge by Province_Code
        finalFeatures = mergeFeaturesByProperty(data.features, 'Province_Code');
        break;
      
      case "Area":
      default:
        // No merging - use original features
        finalFeatures = data.features;
        break;
    }
    
    // Ensure proper winding order for all features
    const mergedFeatures = finalFeatures.map(feature => 
      rewind(feature, { reverse: true })
    );
    
    const mergedData = { 
      ...data, 
      features: mergedFeatures 
    };

    return mergedData;
}

function mergeFeaturesByProperty(features, regionalLevel, forceAllMerge = false) {
    // If forcing all to merge (Country level), we'll use a dummy property
    const groupingFn = forceAllMerge ? 
        () => 'country' : // All features go into same group
        (feature) => feature.properties[regionalLevel];

    // Group features by the specified property
    const featureGroups = {};

    features.forEach(feature => {
        const groupKey = groupingFn(feature);
        if (!featureGroups[groupKey]) {
        featureGroups[groupKey] = [];
        }
        featureGroups[groupKey].push(feature);
    });

    // Merge features within each group
    const mergedFeatures = [];

    Object.keys(featureGroups).forEach(groupKey => {
        const groupFeatures = featureGroups[groupKey];
        
        // Find the lowest fid in this group
        let lowestFid = Number.MAX_SAFE_INTEGER;
        let lowestFidFeature = null;
        
        groupFeatures.forEach(feature => {
        const fid = parseInt(feature.properties.fid, 10);
        if (!isNaN(fid) && fid < lowestFid) {
            lowestFid = fid;
            lowestFidFeature = feature;
        }
        });
        
        // If we have multiple features for this group, merge them
        if (groupFeatures.length > 1) {
        // Create topology
        const topo = topology({
            collection: {
            type: "FeatureCollection",
            features: groupFeatures
            }
        });
        
        // Merge the features
        const mergedGeometry = topojson.merge(
            topo, 
            topo.objects.collection.geometries
        );
        
        // Create a new feature with the merged geometry and lowest fid
        const mergedFeature = {
            type: "Feature",
            properties: {
            ...lowestFidFeature.properties, // Preserve properties from the lowest fid feature
            fid: lowestFid, // Use the lowest fid value
            },
            geometry: mergedGeometry
        };
        
        mergedFeatures.push(mergedFeature);
        } else if (groupFeatures.length === 1) {
        // Only one feature for this group, no need to merge
        mergedFeatures.push(groupFeatures[0]);
        }
    });

    return mergedFeatures;
}
module.exports = {renderRegions , renderRegionLabels};
