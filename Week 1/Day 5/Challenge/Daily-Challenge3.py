# List of French words
french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]

# Corresponding English translations
english_words = ["Hello", "Goodbye", "Welcome", "See you soon"]

# Create dictionary by zipping both lists
translation_dict = {french: english for french, english in zip(french_words, english_words)}

print(translation_dict)
