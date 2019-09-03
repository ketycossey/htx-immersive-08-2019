height = int(input('Input the height of your box:  '))
width = int(input('Input the width of you box :'))

space_between=" "


for i in range(height):
    if i == 0 or i == height-1:
        print(width*'*')
    else: 
        print('*' + space_between*(width - 2) +'*')   

