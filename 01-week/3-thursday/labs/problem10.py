coins = 0
print( f'you have {coins} coins')
should_add = True
while should_add:
    ask_again = str(input('Do you want another coin?  '))
    if ask_again == 'yes':
        coins = coins + 1
        print( f'you have {coins} coins') 
    elif ask_again == 'no':
         should_add = False
         print ('Bye')