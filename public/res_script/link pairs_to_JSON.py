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
            "color": "green",
            "width": 1
        })

# Write to JSON file
with open(json_output_file, 'w') as jsonfile:
    json.dump(json_data, jsonfile, indent=4)

print(f"{len(json_data)} objects written to {json_output_file}")
