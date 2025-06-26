class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{self.name} says: {sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{self.name} says: {sounds}'

# Step 1: Siamese class
class Siamese(Cat):
    def __init__(self, name, age, favorite_spot):
        super().__init__(name, age)
        self.favorite_spot = favorite_spot

    def purr(self):
        return f'{self.name} is purring in their favorite spot: {self.favorite_spot}'

    def sing(self, sounds):
        return f'{self.name} sings: {sounds}'

# Step 2: Create list of cats
bengal_cat = Bengal("Simba", 3)
chartreux_cat = Chartreux("Luna", 5)
siamese_cat = Siamese("Milo", 2, "sunny windowsill")

all_cats = [bengal_cat, chartreux_cat, siamese_cat]

# Step 3: Create Pets instance
sara_pets = Pets(all_cats)

# Step 4: Take cats for a walk
sara_pets.walk()

# Bonus test: show sing and purr methods
print(siamese_cat.purr())
print(chartreux_cat.sing("Meoww!"))