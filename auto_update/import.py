import psycopg2

# Define an array of table names and file names
tables = ["br_videoinfos"]
files = ["br_videoinfo.csv"]

# Connect to the database
conn = psycopg2.connect(database="FinalProject",
                        user='postgres', password='095126167170', 
                        host='database-2.czezomqwfxmw.us-east-1.rds.amazonaws.com', port='5432'
)
cursor = conn.cursor()
# Loop through the tables and files arrays
for table, file in zip(tables, files):
  with conn.cursor() as cur:
    # Use the \copy command to copy the data from the file to the table
    cur.execute(f"copy {table} FROM './{file}' WITH (FORMAT csv, ENCODING 'UTF-8')")
# Commit the changes
conn.commit()
# Close the connection
conn.close()