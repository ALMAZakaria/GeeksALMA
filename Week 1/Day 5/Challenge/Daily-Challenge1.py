import math
import turtle

class Circle:
    def __init__(self, radius=None, diameter=None):
        # Allow user to define the circle by radius or diameter
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter must be provided.")

    @property
    def diameter(self):
        # Return the diameter (always double the radius)
        return self.radius * 2

    @property
    def area(self):
        # Compute the area of the circle
        return math.pi * (self.radius ** 2)

    def __str__(self):
        # Return a nicely formatted string when printing the circle
        return f"Circle(radius={self.radius:.2f}, diameter={self.diameter:.2f}, area={self.area:.2f})"

    def __add__(self, other):
        # Add two circles by adding their radii and returning a new Circle
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        return NotImplemented

    def __lt__(self, other):
        # Less than: compare based on radius
        if isinstance(other, Circle):
            return self.radius < other.radius
        return NotImplemented

    def __eq__(self, other):
        # Equal: if both circles have the same radius
        if isinstance(other, Circle):
            return self.radius == other.radius
        return NotImplemented

# -------------------------------
# 🧪 Try the class with some examples
# -------------------------------

# Create some circles
c1 = Circle(radius=12)
c2 = Circle(diameter=40)
c3 = Circle(radius=20)

# Print the circles
print(c1)
print(c2)
print(c3)

# Add circles
c4 = c1 + c2
print("Added Circle:", c4)

# Compare circles
print("Is c1 < c2?", c1 < c2)
print("Is c2 == c3?", c2 == c3)

# Sorting a list of circles
circle_list = [c1, c2, c3, c4]
sorted_circles = sorted(circle_list)

print("\nSorted Circles:")
for circle in sorted_circles:
    print(circle)


def draw_circles(circles):
    turtle.speed(1)
    for circle in circles:
        turtle.penup()
        turtle.goto(0, -circle.radius)  # Move to the bottom of the circle
        turtle.pendown()
        turtle.circle(circle.radius)
    turtle.done()
draw_circles(sorted_circles)