#import psycopg2
from menu_item import DB_PARMS, MenuItem
from menu_manager import DB_PARMS, MenuManager


# 1-show_user_menu() - this function should display the program menu 
def show_user_menu():
    while True:
        print("\n--- MENU EDITOR ---")
        print("What would you like to do?")
        print("(V) View an Item")
        print("(A) Add an Item")
        print("(D) Delete an Item")
        print("(U) Update an Item")
        print("(S) Show Full Menu")
        print("(E) Exit")

        choice = input("Enter your choice: ").strip().upper()

        if choice == 'V':
            view_item()
        elif choice == 'A':
            add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_from_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'E':
            print("Exiting and displaying final menu:")
            show_restaurant_menu()
            break
        else:
            print("Invalid choice. Please try again.")
# -- add_item_to_menu() - this function should ask the user to input the item’s name and price.2- 
def add_item_to_menu():
    name = input("Enter the name of the new item: ").strip()
    price = input("Enter the price of the new item: ").strip()

    if not price.isdigit():
        print("Price must be a number.")
        return

    item = MenuItem(name, int(price))
    item.save()
    print(f"'{name}' was added successfully with price {price}.")


# 3- remove_item_from_menu()- this function should ask the user to input the name of the item they want to remove from the restaurant’s menu. 

def remove_item_from_menu():
    name = input("Enter the name of the item to remove: ").strip()
    item = MenuManager.get_by_name(name)

    if item:
        item.delete()
        print(f"'{name}' was deleted successfully.")
    else:
        print(f"Error: '{name}' does not exist in the menu.")

# 4-update_item_from_menu()- this function should ask the user to input the name and price of the item they want to update from the restaurant’s menu,

def update_item_from_menu():
    old_name = input("Enter the current name of the item to update: ").strip()
    old_item = MenuManager.get_by_name(old_name)

    if not old_item:
        print(f"Error: '{old_name}' not found in the menu.")
        return

    new_name = input("Enter the new name: ").strip()
    new_price = input("Enter the new price: ").strip()

    if not new_price.isdigit():
        print("Price must be a number.")
        return

    old_item.update(new_name, int(new_price))
    print(f"'{old_name}' was updated to '{new_name}' with price {new_price}.")
# 5-show_restaurant_menu() - print the restaurant’s menu.

def show_restaurant_menu():
    print("\n--- RESTAURANT MENU ---")
    items = MenuManager.all_items()
    if not items:
        print("The menu is currently empty.")
        return

    for item in items:
        print(f"{item.name} - ${item.price}")

#5- When the user chooses to exit the program, display the restaurant menu and exit the program.
def view_item():
    name = input("Enter the item name to view: ").strip()
    item = MenuManager.get_by_name(name)
    if item:
        print(f"Found: {item.name} - ${item.price}")
    else:
        print(f"'{name}' not found in the menu.")


# Run the app
if __name__ == '__main__':
    show_user_menu()