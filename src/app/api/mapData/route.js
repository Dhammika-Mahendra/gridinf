import { NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb';

export async function GET() {
  try {
    // Get MongoDB client
    const client = await clientPromise;
    
    // Get database and collection
    const db = client.db("GridInf_local");
    const collection1 = db.collection("Nodes");
    const collection2 = db.collection("Links");
    const collection3 = db.collection("Graphs");
    
    // Retrieve all documents from the collection
    const nodeData = await collection1.find({}).toArray();
    const linkData = await collection2.find({}).toArray();
    const graphData = await collection3.find({}).toArray();

    // Create response with CORS headers
    return new NextResponse(
      JSON.stringify({
        nodes: nodeData,
        links: linkData,
        graph: graphData,
      }),
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Content-Type': 'application/json',
        },
      }
    );
    
  } catch (error) {
    console.error('MongoDB operation error:', error);
    return new NextResponse(
      JSON.stringify({ 
        status: 'error',
        message: 'Failed to retrieve data from MongoDB',
        error: error.message 
      }),
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Content-Type': 'application/json',
        },
      }
    );
  }
} 