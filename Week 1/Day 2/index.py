brand = {
  'name' : 'zara',
  'creation_date':1975,
  'creator_name':'Amancio Ortega Gaona',
  'type_of_clothes':['men','women','children','home'],
  'international_competitors':['Gap','H&M','Benetton'],
  'number_stores':7000,
  'major_color':{
        'France':'blue',
        'Spain':'red',
        'US':['pink','green'],
  }
}
#! 2. Change the number of stores to 2.
brand['number_stores'] = 2

#! 3. Use the key [type_of_clothes] to print a sentence that explains who Zaras clients are.
for i in brand['type_of_clothes']:
  print(i)

#! 4. Add a key called country_creation with a value of Spain.

brand['country_creation '] = 'Spain'

#! 5. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.

if 'international_competitors' in brand:
  brand['international_competitors'].append('Desigual')

#! 6. Delete the information about the date of creation.
del brand 
