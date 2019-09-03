height= int(input('What  is the height of your triangle? :  '))
h = (height * 2)
x = h
space =" "
for i in range (1, h, 2):
    print (space*x +  i*'*'  )
    x = x-1
