import csv
import json
import os

def convert_csv_to_json(csv_file_path, json_file_path):
    # List to store the converted data
    nodes = []
    
    # Check if file exists
    if not os.path.exists(csv_file_path):
        print(f"Error: File {csv_file_path} not found")
        return []
    
    # Read the CSV file
    with open(csv_file_path, 'r', encoding='utf-8-sig') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        
        # Process each row
        for row in csv_reader:
            # Create a node object with the specified format
            node = {
                "id": row["id"],
                "lat": float(row["Y"]),
                "lon": float(row["X"] if "X" in row else row["ï»¿X"]),  # Handle both possible column names
                "color": "blue",
                "size": 4,
                "label": row["id"]
            }
            
            # Add the node to our list
            nodes.append(node)
    
    # Write the JSON data to a file
    with open(json_file_path, 'w') as json_file:
        json.dump(nodes, json_file, indent=2)
    
    print(f"Conversion complete. JSON data written to {json_file_path}")
    return nodes

# Execute the conversion
if __name__ == "__main__":
    # Define the root directory
    root_dir = r"C:\Users\Dhammika Mahendra\Documents\Code Test\NextJs\gridinf\public\res_script"
    
    # Construct the full paths
    input_csv = os.path.join(root_dir, "nodesExpo.csv")
    output_json = os.path.join(root_dir, "nodes.json")
    
    nodes_data = convert_csv_to_json(input_csv, output_json)
    
    # Print the first node as a sample
    if nodes_data:
        print("\nSample node:")
        print(json.dumps(nodes_data[0], indent=2))
