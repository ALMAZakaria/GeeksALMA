# Daily Challenge : Pagination

import math

class Pagination :
    def __init__(self , items = None , size = 10):
        if items is None :
            self.items = []
        else:
            self.items = items

        # how many items should go on each page
        # page_size is 2 then each page shows 2 items
        self.size = size

        self.current_idx = 0

        # len list : len(self.items)
        self.total_pages = math.ceil(len(self.items) / self.size)

    def get_visible_items(self) :
        start = self.current_idx * self.size
        end = start + self.size
        return self.items[start:end]

    def go_to_page(self, page_num):
        if page_num < 1 or page_num > self.total_pages:
            raise ValueError(f"page number {page_num} is out of range")
        self.current_idx = page_num - 1
        return self
    
    def first_page(self):
        self.current_idx = 0
        return self

    def last_page(self):
        self.current_idx = self.total_pages - 1
        return self

    def next_page(self):
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self

    def previous_page(self):
        if self.current_idx > 0:
            self.current_idx -= 1
        return self

    def __str__(self):
        visible_items = self.get_visible_items()
        return "\n".join(visible_items)
        


# mypage = Pagination(['a' , 'b' , 'c'] , 2)
# 3 items / 2 per page / ceil(2.3) = 2 p

# print(mypage.total_pages)
# print(mypage.get_visible_items())

alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.get_visible_items())

p.next_page()
print(p.get_visible_items())

p.last_page()
print(p.get_visible_items())

p.go_to_page(10)
print(p.current_idx + 1)

p.go_to_page(0)