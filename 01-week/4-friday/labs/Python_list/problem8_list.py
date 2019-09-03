x = [ 2, 3, 4 ]
y = [2, 3, 4 ]
z = [0, 0, 0]
#z.append ( x[0] * y[0])
#z.append (x[1] * y[1])
#z.append (x[2] * y[2])
#print (z)
for i in range(len(x)) :
    for j in range(len(x[0])):
        z[i][j] = x[i][j] * y[i][j]
for r in z:
    print(r)