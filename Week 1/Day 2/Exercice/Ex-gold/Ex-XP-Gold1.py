import random

# Exercise 2: Birthdays Advanced
def birthdays_advanced():
    birthdays = {
        "Alice": "1990/05/12",
        "Bob": "1985/07/29",
        "Charlie": "1992/03/15",
        "Diana": "1988/11/02",
        "Eve": "1995/09/08"
    }

    # Print all names in the dictionary
    print("Welcome to the Birthday Look-up!")
    print("Here are the names in our list:")
    for name in birthdays.keys():
        print(f"- {name}")

    # Ask the user for a name
    name = input("\nEnter a person's name to look up their birthday: ").strip()

    # Check if the name exists in the dictionary
    if name in birthdays:
        print(f"{name}'s birthday is on {birthdays[name]}.")
    else:
        print(f"Sorry, we don’t have the birthday information for {name}.")


# Exercise 3: Sum (X + XX + XXX + XXXX)
def calculate_sum(x):
    return int(x) + int(str(x) * 2) + int(str(x) * 3) + int(str(x) * 4)

def sum_exercise():
    x = int(input("Enter a number: ").strip())
    result = calculate_sum(x)
    print(f"The result of {x} + {x}{x} + {x}{x}{x} + {x}{x}{x}{x} is {result}.")


# Exercise 4: Double Dice
def throw_dice():
    return random.randint(1, 6)

def throw_until_doubles():
    throws = 0
    while True:
        dice1 = throw_dice()
        dice2 = throw_dice()
        throws += 1
        if dice1 == dice2:
            break
    return throws

def double_dice_exercise():
    results = [throw_until_doubles() for _ in range(100)]
    total_throws = sum(results)
    average_throws = round(total_throws / len(results), 2)

    print(f"Total throws: {total_throws}")
    print(f"Average throws to reach doubles: {average_throws}")


# Main function to call all exercises
def main():
    print("Exercise 2: Birthdays Advanced")
    birthdays_advanced()
    print("\nExercise 3: Sum")
    sum_exercise()
    print("\nExercise 4: Double Dice")
    double_dice_exercise()

# Run the main function
main()