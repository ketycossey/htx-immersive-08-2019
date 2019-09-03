n = int(input('Enter the number you would like to factor:   '))

print ('The factors of', n, 'are:')
for  i in range (2,n+1):
    if n % i == 0 and  n!=i:    
        print ( i)  
else:
    print ("Number has no factors")
