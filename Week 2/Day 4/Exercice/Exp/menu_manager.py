import psycopg2
from menu_item import DB_PARMS, MenuItem

# 4- Create a new class called MenuManager
class MenuManager:

# '-1- Create a Class Method called get_by_name
    @classmethod
    def get_by_name(cls, name):
        conn = psycopg2.connect(**DB_PARMS)
        cur = conn.cursor()
        cur.execute(
            "SELECT item_name, item_price FROM Menu_Items WHERE item_name  ILIKE %s",
            (name,)
        )
        result = cur.fetchone()
        cur.close()
        conn.close()

        if result:
            return MenuItem(*result)
        return None
# 4-2 Create a Class Method called all_items which will return a list of all the items
    @classmethod
    def all_items(cls):
        conn = psycopg2.connect(**DB_PARMS)
        cur = conn.cursor()
        cur.execute("SELECT item_name, item_price FROM Menu_Items")
        rows = cur.fetchall()
        cur.close()
        conn.close()

        return [MenuItem(name, price) for name, price in rows]


# 5- TEST 
item = MenuItem('Burger', 35)
item.save()
item.delete()
if item:
    print(item.name, item.price)
else: 
      print("Item has been deleted")
item.update('Veggie Burger', 37)
if item:
    print(f"Item has been updated to: ",item.name, item.price)
else: 
      print("Item has been deleted")
item2 = MenuManager.get_by_name('Beef Stew')
if item2:
    print(item2.name, item2.price)

items = MenuManager.all_items()  # Correct method call
for itm in items:
    print(itm.name, itm.price)


