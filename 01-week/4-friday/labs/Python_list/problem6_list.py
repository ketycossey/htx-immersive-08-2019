#prints out numbers greater than 0 in a list

numbers = [  - 5, 7, 11, 6, -9, 9, 50, 7, 8]
new_list= []
for greater_than_zero in numbers:
    if greater_than_zero > 0:
       new_list.append(greater_than_zero)
print(new_list)
