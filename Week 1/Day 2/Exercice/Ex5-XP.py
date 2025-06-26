import random

# Define the function
def compare_random_number(user_number):
    """Accepts a number between 1 and 100, generates a random number, and compares them."""
    if not 1 <= user_number <= 100:
        print("The number must be between 1 and 100.")
        return
    
    random_number = random.randint(1, 100)
    
    # Compare the two numbers
    if user_number == random_number:
        print(f"Success! Both numbers are {user_number}.")
    else:
        print(f"Fail! Your number was {user_number}, but the random number was {random_number}.")

# Example usage
compare_random_number(50)  # Replace 50 with any number between 1 and 100