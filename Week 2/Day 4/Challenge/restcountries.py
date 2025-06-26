import requests
import random
import psycopg2

# please make sure to  execute the following command in your terminal bash
# pip install requests
# Database configuration
DB_PARAMS = {
    'host': 'localhost',
    'port': '5432',
    'database': 'countries_db', # Replace with ur actual db name
    'user': 'postgres',
    'password': '123456789@@@@'  # Replace with ur actual password
}

def fetch_random_countries():
    # Fetch all countries from the API
    response = requests.get('https://restcountries.com/v3.1/all')
    if response.status_code != 200:
        raise Exception("Failed to fetch data from REST Countries API")

    countries = response.json()
    selected = random.sample(countries, 10)

    formatted = []
    for c in selected:
        name = c.get('name', {}).get('common', 'Unknown')
        capital = c.get('capital', ['Unknown'])[0]
        flag = c.get('flags', {}).get('png', '')
        subregion = c.get('subregion', 'Unknown')
        population = c.get('population', 0)
        formatted.append((name, capital, flag, subregion, population))

    return formatted

def insert_into_db(countries):
    conn = psycopg2.connect(**DB_PARAMS)
    cur = conn.cursor()

    for country in countries:
        cur.execute("""
            INSERT INTO countries (name, capital, flag, subregion, population)
            VALUES (%s, %s, %s, %s, %s)
        """, country)

    conn.commit()
    cur.close()
    conn.close()
    print("✅ Countries inserted successfully.")

if __name__ == '__main__':
    countries = fetch_random_countries()
    insert_into_db(countries)
