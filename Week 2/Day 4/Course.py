import psycopg2

# Replace with your own credentials
connection = psycopg2.connect(
    host="localhost",
    port="5432",
    database="dvdrental",
    user="postgres",
    password="123456789@@@@"
)

cursor = connection.cursor()

query = "SELECT * FROM actor ;"
cursor.execute(query)
results = cursor.fetchall()
print("Results:", results)


cursor.close()
connection.close()
