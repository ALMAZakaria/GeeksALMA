txt = "Running  is very good for humans in many different ways. It is a great way to get exercise, and a great way to meet new people. There are many positives, and some negatives, it is easy, enjoyable and makes humans more social, you can do it at anytime, and it relieves stress rather than give stress."

print("This is your paragraph:\n")
print(txt)

length_paragraph = len(txt)
print("Your paragraph contains {} characters.".format(length_paragraph))

# Replace sentence-ending punctuation with periods and split
sentences = txt.replace('!', '.').replace('?', '.').split('.')

# Remove empty strings and extra spaces
sentences = [s.strip() for s in sentences if s.strip()]
print("Number of sentences:", len(sentences))

# How many words it contains
words = txt.split()
print("It containes, {} words".format(len(words)))

#unique words it contains
Uni_words = set(txt.lower().split())
print("The unic words are: {}".format(Uni_words))


#Counting Non white space

NonWhite_space = len([char for char in txt if char.isspace()])
print("Your paragraph contains {} non-whitespace characters.".format(NonWhite_space))

#Average words per sentence

average_words_per_sentence = len(words) / len(sentences)
print("The average number of words per sentence is {:.2f}.".format(average_words_per_sentence))
