def display_board(board):
    print("\n")
    print(" " + board[0] + " | " + board[1] + " | " + board[2])
    print("---+---+---")
    print(" " + board[3] + " | " + board[4] + " | " + board[5])
    print("---+---+---")
    print(" " + board[6] + " | " + board[7] + " | " + board[8])
    print("\n")

def player_input(board, player):
    while True:
        try:
            position = int(input(f"Player {player} ({'X' if player == 1 else 'O'}), enter position (1-9): ")) - 1
            if position < 0 or position > 8:
                print("Invalid position. Choose a number from 1 to 9.")
            elif board[position] != " ":
                print("That spot is already taken. Try again.")
            else:
                return position
        except ValueError:
            print("Please enter a valid number.")

def check_win(board, mark):
    win_conditions = [
        (0, 1, 2), (3, 4, 5), (6, 7, 8),  # rows
        (0, 3, 6), (1, 4, 7), (2, 5, 8),  # columns
        (0, 4, 8), (2, 4, 6)              # diagonals
    ]
    return any(board[i] == board[j] == board[k] == mark for i, j, k in win_conditions)

def is_board_full(board):
    return " " not in board

def play():
    board = [" "] * 9
    current_player = 1
    game_on = True

    print("Welcome to Tic Tac Toe!")
    display_board([str(i + 1) for i in range(9)])  # Show number positions

    while game_on:
        display_board(board)
        mark = 'X' if current_player == 1 else 'O'
        position = player_input(board, current_player)
        board[position] = mark

        if check_win(board, mark):
            display_board(board)
            print(f"🎉 Player {current_player} ({mark}) wins!")
            game_on = False
        elif is_board_full(board):
            display_board(board)
            print("It's a tie!")
            game_on = False
        else:
            current_player = 2 if current_player == 1 else 1

if __name__ == "__main__":
    play()
