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
