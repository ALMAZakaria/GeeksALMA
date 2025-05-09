import random

class Game:
    def get_user_item(self):
        valid_choices = ['rock', 'paper', 'scissors']
        while True:
            user_input = input("Choose rock, paper, or scissors: ").strip().lower()
            if user_input in valid_choices:
                return user_input
            else:
                print("Invalid choice. Please try again.")

    def get_computer_item(self):
        return random.choice(['rock', 'paper', 'scissors'])

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return 'draw'
        elif (
            (user_item == 'rock' and computer_item == 'scissors') or
            (user_item == 'scissors' and computer_item == 'paper') or
            (user_item == 'paper' and computer_item == 'rock')
        ):
            return 'win'
        else:
            return 'loss'

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        print(f"\nYou selected {user_item}. The computer selected {computer_item}.")
        if result == 'win':
            print("You win!\n")
        elif result == 'loss':
            print("You lose.\n")
        else:
            print("It's a draw.\n")

        return result

def get_user_menu_choice():
    print("Menu:")
    print("1. Play a new game")
    print("2. Show scores")
    print("3. Quit")
    choice = input("Enter your choice (1/2/3): ").strip()

    if choice == '1':
        return 'play'
    elif choice == '2':
        return 'score'
    elif choice == '3':
        return 'quit'
    else:
        print("Invalid input. Please select 1, 2 or 3.")
        return None

def print_results(results):
    print("\nGame Summary:")
    print(f"Wins: {results['win']}")
    print(f"Losses: {results['loss']}")
    print(f"Draws: {results['draw']}")
    print("Thanks for playing!")

def main():
    results = {'win': 0, 'loss': 0, 'draw': 0}

    while True:
        user_choice = get_user_menu_choice()
        if user_choice == 'play':
            game = Game()
            result = game.play()
            results[result] += 1
        elif user_choice == 'score':
            print_results(results)
        elif user_choice == 'quit':
            print_results(results)
            break

if __name__ == "__main__":
    main()
