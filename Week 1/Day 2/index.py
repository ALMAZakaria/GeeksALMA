birthdays = {
  'Saad':'1999:08:05',
  'Fouad':'1995:02:01',
  'Jawad':'1994:05:25',
  'MAroua':'1997:07:25',
  'Asma':'1996:06:13'
}
print("Hello user, welcom to Birthday Look-up!")
print("You can look up the birthdays of the people in the list!")

name = input("Enter a person's name: ").strip()

# Check if the name exists in the dictionary
if name in birthdays:
    # Print the birthday
    print(f"{name}'s birthday is on {birthdays[name]}.")
else:
    # Handle the case when the name is not found
    print(f"Sorry, we don't have the birthday information for {name}.")