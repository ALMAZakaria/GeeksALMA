# Define the make_shirt function
def make_shirt(size="Large", text="I love Python"):
    """Prints the size of the shirt and the text that will be printed on it."""
    print(f"The size of the shirt is {size} and the text is '{text}'.")

make_shirt()

make_shirt(size="Medium")

make_shirt(size="Small", text="Code is Life")

# Bonus: Call the function using keyword arguments
make_shirt(text="Hello World!", size="Extra Large")