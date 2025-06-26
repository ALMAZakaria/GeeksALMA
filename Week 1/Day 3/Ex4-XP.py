class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print("Animals in the zoo:", self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        self.animals.sort()
        self.groups = {}
        for animal in self.animals:
            letter = animal[0].upper()
            if letter not in self.groups:
                self.groups[letter] = []
            self.groups[letter].append(animal)

    def get_groups(self):
        for key in sorted(self.groups):
            print(f"{key}: {self.groups[key]}")
