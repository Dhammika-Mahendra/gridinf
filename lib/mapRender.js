import * as topojson from 'topojson-client';
import { topology } from 'topojson-server';
import rewind from '@turf/rewind';

//=========================================================================
//               Custom made functions for map rendering
//=========================================================================

function renderMap(data,propertyName){
    let finalFeatures = [];
        
    switch(propertyName) {
      case "Country":
        // Merge all features into one
        finalFeatures = mergeFeaturesByProperty(data.features, 'country', true);
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
    const correctedFeatures = finalFeatures.map(feature => 
      rewind(feature, { reverse: true })
    );
    
    const correctedData = { 
      ...data, 
      features: correctedFeatures 
    };

    return correctedData;
}

function mergeFeaturesByProperty(features, propertyName, forceAllMerge = false) {
    // If forcing all to merge (Country level), we'll use a dummy property
    const groupingFn = forceAllMerge ? 
        () => 'country' : // All features go into same group
        (feature) => feature.properties[propertyName];

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
module.exports = { mergeFeaturesByProperty, renderMap };
