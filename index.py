#Inpute / OutPut
'''
name = input("What's your name?\n")
print("Hello, {} welcom".format(name))
'''
'''
name = input("Hello, welcom to our program. Plaise enter your name: ")
age = input("Plaise enter your age: ")

def infos():
  age_input = int(age)

  if age_input < 18 :
    print("\nYou are minor, we are sorry to tell you that don't have access to this program.")
  elif age_input > 40 :
    print("\nYou are more then 30years old, we are sorry to tell you that don't have access to this program.")
  else:
    print("\nWow, congrats you are able to start our bootcamp!")

infos()  
'''
'''
#Function With Parametres
def infos(name,age):
  if age < 18 :
    print("\nYou are minor, we are sorry to tell you that don't have access to this program.")
  elif age > 40 :
    print("\nYou are more then 30years old, we are sorry to tell you that don't have access to this program.")
  else:
    print("\nWow, congrats you are able to start our bootcamp!")
name = input("Hello, welcom to our program. Plaise enter your name: ")
age = int(input("Plaise enter your age: "))

infos(name,age)  
'''
#Exceptions + Break The importance of break  is to make the loop stops when the condition is true. Then it stop looping the output try to make it as a comment and see what is going to happen
'''
def infos(name,age):
    while True:
      try:
        age_in = int(age)
        if age_in < 18 :
          print("\nYou are minor, we are sorry to tell you that don't have access to this program.")
        elif age_in > 40 :
          print("\nYou are more then 30years old, we are sorry to tell you that don't have access to this program.")
        else:
          print("\nWow, congrats you are able to start our bootcamp!")
        break
      except  ValueError:
            age = input("Plaise Entre a valid numbre for your age: ")
       
      #finally:
        #print("Closing the program.")
        #break
    
name = input("Hello, welcom to our program. Plaise enter your name: ")
age = input("Plaise enter your age: ")

infos(name,age)  
'''
#List / Tuples / Set / dictionnary
#List
fruits = ["banana","apple","orange","mango"]
#Tuples
fruits = ("banana","apple","orange","mango")
#Set
fruits = {"banana","apple","orange","mango"}
#Dictionnary
fruits = {
  "banana": 1,
  "apple": 2,
  "orange": 3,
  "mango": 4
}


