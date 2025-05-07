# 🌟 Exercise 3: Zara
brand = {
    'name' : 'zara',
    'creation_date' : 1975,
    'creator_name': 'Amancio Ortega Gaona' ,
    'type_of_clothes': ['men', 'women', 'children', 'home'],
    'international_competitors': ['Gap', 'H&M', 'Benetton'],
    'number_stores': 7000 ,
    'major_color' : {
        'France': 'blue', 
        'Spain': 'red', 
        'US': ['pink', 'green']
    }
}

# 2. Change the number of stores to 2.
brand['number_stores'] = 2

# 3. Use the key [type_of_clothes] to print a sentence that explains who Zaras clients are.
print("Zara's clients are:")
for i in brand['type_of_clothes']:
    print(i)

# 4. Add a key called country_creation with a value of Spain.
brand['country_creation'] = 'Spain'

# 5. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
if 'international_competitors' in brand :
    brand['international_competitors'].append('Desigual')

# 6. Delete the information about the date of creation.
del brand['creation_date']

#7. Print the last international competitor.
print("last international competitor:", brand["international_competitors"][-1])

# 8. Print the major clothes colors in the US.
us_colors = brand["major_color"]["US"]
print("major clothes colors in the US:", us_colors[0], "and", us_colors[1])

#9. Print the amount of key value pairs (ie. length of the dictionary).
print("number of key value pairs:", len(brand))

# 10. Print the keys of the dictionary.
print("dictionary keys:", list(brand.keys()))

# 11. Create another dictionary called more_on_zara with the following details:
#& creation_date: 1975
#& number_stores: 10 000
more_on_zara = {
    'creation_date': 1975,
    'number_stores': 10000,
}

# 12. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
brand.update(more_on_zara)

# 13. Print the value of the key number_stores. What just happened ?
print("Updated number of stores:", brand["number_stores"])


# print(brand)