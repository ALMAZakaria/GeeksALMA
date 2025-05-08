# Function to create a dictionary of letter indexes
def create_letter_index_dict():
  # Ask the user for a word
  word = input("Enter a word: ").strip()

  #initialize an empty dictionary
  letter_dict = {}

  # Loop through the word to populate the dictionary
  for index, letter in enumerate(word):
      if letter not in letter_dict:
         letter_dict[letter] = []
      letter_dict[letter].append(index)

  # Print the resulting dictionary
  print(f"The dictionary of letter indexes is: {letter_dict}")

# Call the function
create_letter_index_dict()