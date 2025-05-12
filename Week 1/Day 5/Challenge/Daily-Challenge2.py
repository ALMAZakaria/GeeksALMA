# Accept a comma-separated string from the user
input_string = input("Enter words separated by commas: ")

# Split the string into a list, sort it, then join back into a comma-separated string
sorted_words = ",".join(sorted([word.strip() for word in input_string.split(",")]))

print("Sorted words:", sorted_words)

def longest_word(sentence):
    # Split the sentence into words using space as separator
    words = sentence.split()

    # Use max() with key=len to find the longest word
    longest = max(words, key=len)

    return longest

# 🧪 Example tests
print(longest_word("Morocco is a great contry."))         # ➞ "Margaret's"
print(longest_word("A thing of beauty is a joy forever."))      # ➞ "forever."
print(longest_word("Forgetfulness is by all means powerless!")) # ➞ "Forgetfulness"
