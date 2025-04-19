import csv
import json
import os

# File paths
script_dir = os.path.dirname(os.path.abspath(__file__))  # Directory of the current script
csv_input_file = os.path.join(script_dir, 'linkList.csv')       # Input text file
json_output_file = os.path.join(script_dir, 'linkObj.json')   # Output CSV file

# List to hold all the JSON objects
json_data = []

# Read the CSV and create JSON objects
with open(csv_input_file, 'r') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        json_data.append({
            "source": row['First'],
            "target": row['Second'],
            "color": "#1d9100" if row['Type'] == "220" else
                    "#15ff00" if row['Type'] == "132" else "",
            "width": 2 if row['Type'] == "220" else 1,
            "type": row['Type'] 
        })

# Write to JSON file
with open(json_output_file, 'w') as jsonfile:
    json.dump(json_data, jsonfile, indent=4)

print(f"{len(json_data)} objects written to {json_output_file}")
