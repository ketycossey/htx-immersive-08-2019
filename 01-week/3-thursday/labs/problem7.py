total_bill = float(input('The total bill amount is:'))
service = input('How was your service? (good, fair or bad)')
if service == 'good':
    total_bill = total_bill + total_bill * .2
    print (total_bill )
elif service == 'fair':
    total_bill = total_bill + total_bill * .15
    print(total_bill)
elif service == 'bad':
    total_bill = total_bill + total_bill * .10
    print(total_bill)
else:
    print ('horrible service')
