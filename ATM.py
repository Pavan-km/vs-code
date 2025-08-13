while True():
PIN=1234
print("welcome to ATM")
print("Insert card Here")
transaction=[]
inserted=int(input("1-Yes,0-No"))
if inserted==1:
        user_pin=int(input("Enter the 4 digit pin number: "))
        if(user_pin==PIN):
              print('''select the language
              1.English
              2.Hindi
              ''')
              language=int(input("select any one of the languages above:"))
              if language==1:
                     print('language perfered is english')
              elif language==2:
                     print('language perfered is hindi')
              else:
                     print('unable to know the prefered language and default language is')         
              print('''
                    1.deposit
                    2.withdrawal
                    3.bal check
                    4.PIN change''')
              option=int(input("select anyone option above: "))
              if option==1:
                     amount=int(input("feed the cash: "))
                     if amount%100==0:
                            print('cash has been accepted')
                            balance += balance
                            transaction.append(amount)
                     else:
                           print('invalid  cash')
              elif option==2:
                     amount=int(input('enter the amount'))
                     if amount<balance and amount%100==0:
                            print('collect the cash')
                            transaction.append(-amount)
                     else:
                            print('No balance')
              elif option==3:
                     print('available balance:',balance)
              elif option==4:
                     old_pin=int(input('enter the old pin number:'))
                     if old_pin==PIN:
                            new_pin=int(inout('enter the new pin number'))
                            PIN=new_pin                           
                     else:
                            print('invalid pin mumber')
              else:
                     print("you have selected invalid option")