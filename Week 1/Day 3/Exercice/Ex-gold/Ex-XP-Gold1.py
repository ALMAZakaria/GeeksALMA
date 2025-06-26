class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, name, species, age):
        animal = {'name': name, 'species': species, 'age': age}
        if animal not in self.animals:
            self.animals.append(animal)

    def get_animals(self):
        print(f"Animals in {self.name}:")
        for animal in self.animals:
            print(f"Name: {animal['name']}, Species: {animal['species']}, Age: {animal['age']}")

    def sell_animal(self, animal_name):
        self.animals = [animal for animal in self.animals if animal['name'] != animal_name]

    def sort_animals(self):
        self.animals.sort(key=lambda animal: animal['name'])
        self.groups = {}
        for animal in self.animals:
            letter = animal['name'][0].upper()
            if letter in self.groups:
                self.groups[letter].append(animal['name'])
            else:
                self.groups[letter] = [animal['name']]
        return self.groups

    def get_groups(self):
        if hasattr(self, 'groups'):
            print(f"Grouped animals in {self.name}:")
            for letter, animals in self.groups.items():
                print(f"{letter}: {animals}")
        else:
            print("Animals have not been sorted yet.")

# Create a Zoo instance
zoo = Zoo("Safari Park")

# Add animals
zoo.add_animal("Giraffe", "Mammal", 5)
zoo.add_animal("Bear", "Mammal", 4)
zoo.add_animal("Baboon", "Mammal", 3)

# Display all animals
zoo.get_animals()

# Sell an animal
zoo.sell_animal("Bear")

# Display remaining animals
zoo.get_animals()

# Sort and group animals
zoo.sort_animals()

# Display grouped animals
zoo.get_groups()
