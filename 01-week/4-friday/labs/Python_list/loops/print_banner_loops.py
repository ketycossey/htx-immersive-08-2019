banner = input('What is on your mind today? :')
banner_length = len(banner)
print (banner_length)

space_between=" "


for i in range(banner_length):
    if i == 0 or i == banner_length -1:
        print((banner_length + 2)* '*')
        print (banner)
        print((banner_length + 2)* '*')
        print (' ')
      #  print('*' + space_between*(5) +'*')   

