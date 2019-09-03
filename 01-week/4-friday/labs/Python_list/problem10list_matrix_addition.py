matrix1 = int (input('enter your first matrix')
matrix2= int(input('enter your second matrix')
result = []

if len(matrix1) == len(matrix2):
    for i in range(len(matrix1)):
        for j in range(len(matrix2)):
            result[i][j]= matrix1[i][j] + matrix2[i][j]
else:
    print( 'the matreces are not the same size')
for r in result:
    print(r)