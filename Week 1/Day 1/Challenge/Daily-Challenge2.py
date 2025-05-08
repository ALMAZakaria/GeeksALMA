from datetime import datetime

# Function to display the birthday cake with candles
def display_cake(candles):
    # Generate candles based on the user's age
    candle_row = " " * (7 - candles) + "_" * candles + "i" * candles + "_" * candles
    cake = f"""
       {candle_row}
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
    """
    print(cake)

# Main function
def main():
    # Ask the user for their birthdate
    birthdate_input = input("Enter your birthdate (DD/MM/YYYY): ").strip()
    try:
        # Parse the birthdate
        birthdate = datetime.strptime(birthdate_input, "%d/%m/%Y")
        # Calculate the user's age
        today = datetime.today()
        age = today.year - birthdate.year
        if (today.month, today.day) < (birthdate.month, birthdate.day):
            age -= 1

        # Determine the number of candles (last digit of age)
        candles = age % 10

        # Display the cake
        display_cake(candles)
    except ValueError:
        print("Invalid date format. Please use DD/MM/YYYY.")

# Run the program
main()