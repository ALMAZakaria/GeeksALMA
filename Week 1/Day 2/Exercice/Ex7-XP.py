import random

# Function to determine the season based on the month
def get_season_from_month(month):
    """Returns the season based on the given month."""
    if month in [12, 1, 2]:
        return "winter"
    elif month in [3, 4, 5]:
        return "spring"
    elif month in [6, 7, 8]:
        return "summer"
    elif month in [9, 10, 11]:
        return "autumn"
    else:
        return None

# Function to generate a random temperature based on the season
def get_random_temp(season):
    """Returns a random temperature based on the season."""
    if season == "winter":
        return round(random.uniform(-10, 16), 1)  # Random float between -10 and 16
    elif season == "spring":
        return round(random.uniform(0, 23), 1)  # Random float between 0 and 23
    elif season == "summer":
        return round(random.uniform(24, 40), 1)  # Random float between 24 and 40
    elif season == "autumn":
        return round(random.uniform(0, 23), 1)  # Random float between 0 and 23
    else:
        return None

# Main function
def main():
    """Main function to simulate temperature advice based on the season."""
    # Ask the user for the month
    try:
        month = int(input("Enter the number of the month (1 = January, 12 = December): "))
        if not 1 <= month <= 12:
            print("Invalid month. Please enter a number between 1 and 12.")
            return
    except ValueError:
        print("Invalid input. Please enter a number.")
        return

    # Determine the season based on the month
    season = get_season_from_month(month)
    if not season:
        print("Could not determine the season.")
        return

    # Get a random temperature for the season
    temp = get_random_temp(season)
    if temp is None:
        print("Could not generate a temperature. Please try again.")
        return

    # Display the temperature and advice
    print(f"The temperature right now is {temp}°C.")
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temp <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 16 < temp <= 23:
        print("The weather is mild. Enjoy your day!")
    elif 24 <= temp <= 32:
        print("It's warm! Make sure to stay hydrated.")
    elif 32 < temp <= 40:
        print("It's really hot! Stay cool and drink plenty of water.")

# Call the main function
main()