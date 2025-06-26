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


#EX2

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking."

    def run_speed(self):
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        power_self = self.run_speed() * self.weight
        power_other = other_dog.run_speed() * other_dog.weight
        
        if power_self > power_other:
            return f"{self.name} won the fight!"
        elif power_self < power_other:
            return f"{other_dog.name} won the fight!"
        else:
            return "It's a tie!"

# Create three instances of Dog
dog1 = Dog("Rex", 5, 20)
dog2 = Dog("Spot", 3, 10)
dog3 = Dog("Fido", 10, 30)

# Test the bark() method
print(dog1.bark())
print(dog2.bark())
print(dog3.bark())

# Test the run_speed() method
print(f"{dog1.name}'s run speed: {dog1.run_speed():.2f}")
print(f"{dog2.name}'s run speed: {dog2.run_speed():.2f}")
print(f"{dog3.name}'s run speed: {dog3.run_speed():.2f}")

# Test the fight() method
print(dog1.fight(dog2))
print(dog1.fight(dog3))
print(dog2.fight(dog3))


#EX3
import random

# Reuse the Dog class from Exercise 2
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking."

    def run_speed(self):
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        power_self = self.run_speed() * self.weight
        power_other = other_dog.run_speed() * other_dog.weight
        
        if power_self > power_other:
            return f"{self.name} won the fight!"
        elif power_self < power_other:
            return f"{other_dog.name} won the fight!"
        else:
            return "It's a tie!"


# PetDog class extending Dog
class PetDog(Dog):
    def __init__(self, *args):
        super().__init__(*args)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        names = [self.name] + [dog for dog in args]
        print(f"{', '.join(names)} all play together.")

    def do_a_trick(self):
        if self.trained:
            tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
            print(f"{self.name} {random.choice(tricks)}")


# Testing
dog1 = PetDog("Buddy", 3, 15)
dog2 = PetDog("Max", 4, 18)
dog3 = PetDog("Charlie", 2, 12)

dog1.train()
dog1.play("Max", "Charlie")
dog1.do_a_trick()
dog2.do_a_trick()  # Not trained yet


# EX 4
# Step 1: Create the Person class
class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""

    def is_18(self):
        return self.age >= 18


# Step 2: Create the Family class
class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        new_person = Person(first_name, age)
        new_person.last_name = self.last_name
        self.members.append(new_person)

    def check_majority(self, first_name):
        for person in self.members:
            if person.first_name == first_name:
                if person.is_18():
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                return
        print("No such family member found.")

    def family_presentation(self):
        print(f"Family last name: {self.last_name}")
        print("Members:")
        for person in self.members:
            print(f"- {person.first_name}, {person.age} years old")


# --- Testing the classes ---
my_family = Family("ALMA")

# Adding members
my_family.born("SAID", 17)
my_family.born("FOUAD", 21)
my_family.born("JAMAL", 12)

# Checking majority status
my_family.check_majority("SAID")
my_family.check_majority("FOUAD")
my_family.check_majority("JAMAL")
my_family.check_majority("Unknown")  # testing non-existent member

# Presenting family
my_family.family_presentation()
