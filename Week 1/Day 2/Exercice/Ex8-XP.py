# Star Wars Quiz Data
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

# Function to play the quiz
def play_quiz():
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers = []  # List to store details of wrong answers

    print("\nWelcome to the Star Wars Quiz!\n")

    # Loop through the questions
    for item in data:
        user_answer = input(f"{item['question']} ").strip()
        if user_answer.lower() == item['answer'].lower():
            print("Correct!\n")
            correct_answers += 1
        else:
            print(f"Wrong! The correct answer is '{item['answer']}'.\n")
            incorrect_answers += 1
            wrong_answers.append({
                "question": item["question"],
                "your_answer": user_answer,
                "correct_answer": item["answer"]
            })

    return correct_answers, incorrect_answers, wrong_answers

# Function to display the quiz results
def display_results(correct_answers, incorrect_answers, wrong_answers):
    print("\n--- Quiz Results ---")
    print(f"Correct Answers: {correct_answers}")
    print(f"Incorrect Answers: {incorrect_answers}")

    if wrong_answers:
        print("\nQuestions you answered incorrectly:")
        for item in wrong_answers:
            print(f"- Question: {item['question']}")
            print(f"  Your Answer: {item['your_answer']}")
            print(f"  Correct Answer: {item['correct_answer']}\n")

# Main function
def main():
    while True:
        correct_answers, incorrect_answers, wrong_answers = play_quiz()
        display_results(correct_answers, incorrect_answers, wrong_answers)

        # If the user has more than 3 wrong answers, ask them to play again
        if incorrect_answers > 3:
            print("You got more than 3 wrong answers. Would you like to try again? (yes/no)")
            play_again = input().strip().lower()
            if play_again != "yes":
                print("Thanks for playing! May the Force be with you.")
                break
        else:
            print("Great job! Thanks for playing. May the Force be with you.")
            break

# Run the main function
main()