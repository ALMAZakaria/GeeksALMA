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
