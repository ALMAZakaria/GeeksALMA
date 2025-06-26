class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    def add_animal(self, animal_type, count=1):
        if animal_type in self.animals:
            self.animals[animal_type] += count
        else:
            self.animals[animal_type] = count

    def get_info(self):
        info = f"{self.name}'s farm\n\n"
        for animal, count in self.animals.items():
            info += f"{animal} : {count}\n"
        info += "\n    E-I-E-I-0!"
        return info

    def get_animal_types(self):
        return sorted(self.animals.keys())

    def get_short_info(self):
        animals = self.get_animal_types()
        parts = []

        for animal in animals:
            count = self.animals[animal]
            name = animal + "s" if count > 1 else animal
            parts.append(name)

        if len(parts) > 1:
            animal_str = ", ".join(parts[:-1]) + " and " + parts[-1]
        else:
            animal_str = parts[0]

        return f"{self.name}'s farm has {animal_str}."
