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
