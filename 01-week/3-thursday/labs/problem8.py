total_bill = float(input('Total bill amount: '))
service_level = input('How was the service? (good, fair, bad)  ')
number_of_people = int(input ('How many ways will you be splitting the bill?  '))

if service_level == 'good':
    tip_amount = total_bill * .2
    print (f'Tip amount: {tip_amount}' )
    total_bill = total_bill + total_bill *.2
    print (f' your total bill is  {total_bill} ')
    per_person = float(total_bill / number_of_people)
    print (f'Each person will pay  {per_person} ')
elif service_level == 'fair':
    tip_amount = total_bill * .15
    print (f'Tip amount: {tip_amount} ')
    total_bill = total_bill + total_bill *.15
    print (f' your total bill is  {total_bill}')
    per_person = float(total_bill / number_of_people)
    print (f'Each person will pay  {per_person} ')
elif service_level == 'bad':
    tip_amount = total_bill * .10
    print (f'Tip amount: {tip_amount} ')
    total_bill = total_bill + total_bill *.10
    print (f' your total bill is  {total_bill}')
    per_person = float(total_bill / number_of_people)
    print (f'Each person will pay  {per_person} ')
else:
    print ('you got it dude')