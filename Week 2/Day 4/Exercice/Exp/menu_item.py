# 1-
import psycopg2

DB_PARMS = {
      "dbname" : "Restaurant_Menu_Manager",
      "user" : "postgres",
      "password" :  "123456789@@@@",
      "host" : "localhost",
      "port" : "5432"
}
#2-create a new class called MenuItem, 
class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price
# 3-save
    def save(self):
        conn = psycopg2.connect(**DB_PARMS)
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)",
            (self.name, self.price)
        )
        conn.commit()
        cur.close()
        conn.close()
# 3-Delete
    def delete(self):
        conn = psycopg2.connect(**DB_PARMS)
        cur = conn.cursor()
        cur.execute(
            "DELETE FROM Menu_Items WHERE item_name = %s",
            (self.name,)
        )
        conn.commit()
        cur.close()
        conn.close()
# 3-Update
    def update(self, new_name, new_price):
        conn = psycopg2.connect(**DB_PARMS)
        cur = conn.cursor()
        cur.execute(
            "UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s",
            (new_name, new_price, self.name)
        )
        conn.commit()
        cur.close()
        conn.close()
        self.name = new_name
        self.price = new_price