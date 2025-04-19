import csv
import os

# File paths
script_dir = os.path.dirname(os.path.abspath(__file__))  # Directory of the current script
input_file = os.path.join(script_dir, 'links.txt')       # Input text file
output_file = os.path.join(script_dir, 'linkList.csv')   # Output CSV file

# To track unique unordered pairs
seen_pairs = set()
unique_pairs = []

# Read line-by-line to avoid cross-line pairing
with open(input_file, 'r') as file:
    for line in file:
        line = line.strip()
        if not line:
            continue
        numbers = line.split(',')

        # Extract contiguous pairs within the same line
        for i in range(len(numbers) - 1):
            a, b = numbers[i], numbers[i + 1]
            unordered_pair = tuple(sorted((a, b)))
            if unordered_pair not in seen_pairs:
                seen_pairs.add(unordered_pair)
                unique_pairs.append((a, b))

# Write pairs to CSV
with open(output_file, 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['First', 'Second'])  # Optional header
    writer.writerows(unique_pairs)

print(f"{len(unique_pairs)} unique pairs written to {output_file}")
