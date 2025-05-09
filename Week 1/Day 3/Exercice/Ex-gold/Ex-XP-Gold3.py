class MenuManager:
    def __init__(self):
        # Initialize the menu with predefined dishes
        self.menu = [
            {'name': 'Soup', 'price': 10, 'spice': 'B', 'gluten': False},
            {'name': 'Hamburger', 'price': 15, 'spice': 'A', 'gluten': True},
            {'name': 'Salad', 'price': 18, 'spice': 'A', 'gluten': False},
            {'name': 'French Fries', 'price': 5, 'spice': 'C', 'gluten': False},
            {'name': 'Beef bourguignon', 'price': 25, 'spice': 'B', 'gluten': True}
        ]

    def add_item(self, name, price, spice, gluten):
        # Add a new dish to the menu
        new_dish = {'name': name, 'price': price, 'spice': spice, 'gluten': gluten}
        self.menu.append(new_dish)
        print(f"{name} has been added to the menu.")

    def update_item(self, name, price, spice, gluten):
        # Update an existing dish in the menu
        for dish in self.menu:
            if dish['name'].lower() == name.lower():
                dish['price'] = price
                dish['spice'] = spice
                dish['gluten'] = gluten
                print(f"{name} has been updated.")
                return
        print(f"{name} is not in the menu.")

    def remove_item(self, name):
        # Remove a dish from the menu
        for dish in self.menu:
            if dish['name'].lower() == name.lower():
                self.menu.remove(dish)
                print(f"{name} has been removed from the menu.")
                print(f"Updated menu: {self.menu}")
                return
        print(f"{name} is not in the menu.")

    def show_menu(self):
        # Show all dishes on the menu
        print("Current Menu:")
        for dish in self.menu:
            print(f"Name: {dish['name']}, Price: {dish['price']}, Spice: {dish['spice']}, Gluten: {dish['gluten']}")

# Example usage:
if __name__ == "__main__":
    menu_manager = MenuManager()

    # Display initial menu
    menu_manager.show_menu()

    # Add new dish
    menu_manager.add_item('Pizza', 20, 'A', True)

    # Update an existing dish
    menu_manager.update_item('Soup', 12, 'C', False)

    # Remove a dish
    menu_manager.remove_item('Hamburger')

    # Show the updated menu
    menu_manager.show_menu()
