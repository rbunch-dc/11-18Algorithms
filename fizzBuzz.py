
# fizzBuzz
# print all integers from 1-100.
# If the number is divisible by 3, print fizz insetad of the #
# If the number is divisible by 5, print buzz insetad of the #
# If the number is divisible by 15, print fizzbuzz insetad of the #
for i in range(1,100):
    if (i % 15 == 0):
        print "FizzBuzz"
    elif(i % 3 == 0):
        print "Fizz"
    elif(i % 5 == 0):
        print "Buzz"
    else:
        print i