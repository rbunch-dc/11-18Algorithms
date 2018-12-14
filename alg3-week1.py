# The prime factors of 13195 are 5, 7, 13 and 29.
# What is the largest prime factor of the number 600851475143 ?

user_number = int(raw_input("What number would you like to factor?"))
prime_factors = []
for i in range(2,user_number):
    if(user_number % i == 0 ):
        prime_factors.append(i)
        user_number = user_number / i
        i = 2