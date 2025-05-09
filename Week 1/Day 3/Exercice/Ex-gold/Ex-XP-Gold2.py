import random

class MyList:
    def __init__(self, letters):
        self.letters = letters

    def reverse_list(self):
        return self.letters[::-1]

    def sort_list(self):
        return sorted(self.letters)

    def generate_random_list(self):
        return [random.randint(1, 100) for _ in range(len(self.letters))]

# Example usage:
my_list = MyList(['a', 'd', 'c', 'b', 'e'])

# Reversed list
reversed_list = my_list.reverse_list()
print("Reversed List:", reversed_list)

# Sorted list
sorted_list = my_list.sort_list()
print("Sorted List:", sorted_list)

# Random list
random_list = my_list.generate_random_list()
print("Random List:", random_list)
