x = [[2, -2],
     [5, 3]]

y = [[1, 3],
    [6, 7]]
result = [[0, 0],
          [0, 0]]    

for i in range(len(x)):
  for j in range(len(x[0])):
    result[i][j]= x[i][j] + y[i][j]
for r in result:
  print (r)