x = [1, 1, 2, 2, 3, 4, 5, 6, 6, 8,10]
new_list= []

for i in x:
    if i not in new_list:
        new_list.append(i)
        new_list.sort()
print (new_list)