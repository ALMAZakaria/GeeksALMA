family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

# Function to calculate ticket price based on age
def calculate_ticket_price(age):
    if age < 3:
        return 0
    elif 3 <= age <= 12:
        return 10
    else:
        return 15

# Calculate and print each family member's cost and the total cost
total_cost = 0
for name, age in family.items():
    cost = calculate_ticket_price(age)
    print(f"{name.capitalize()} has to pay ${cost}.")
    total_cost += cost

print(f"\nThe family's total cost for the movies is ${total_cost}.")

# Bonus: Allow user to input names and ages
print("\n--- Bonus: User Input ---")
family = {}
while True:
    name = input("Enter the family member's name (or type 'done' to finish): ").strip()
    if name.lower() == 'done':
        break
    age = int(input(f"Enter {name}'s age: ").strip())
    family[name] = age

# Recalculate and print the new family cost
total_cost = 0
print("\nMovie Costs:")
for name, age in family.items():
    cost = calculate_ticket_price(age)
    print(f"{name.capitalize()} has to pay ${cost}.")
    total_cost += cost

print(f"\nThe family's total cost for the movies is ${total_cost}.")