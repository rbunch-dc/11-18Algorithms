# in this universe, 2 and 3 are ALWAYS, ALWAYS PRIME
known_primes = [2,3]
# a function that will find if a number is prime
def is_prime(n):
    # print n
    total_known_primes = len(known_primes)
    for i in range(0,total_known_primes):
        if(n % known_primes[i] == 0):
            # THIS IS DIVISIBLE BY A PRIME NUMBER.
            # IT CANNOT BE PRIME
            return False
        else:
            # its not divisible by this one... BUT that doesn't mean
            # it's not prime. Its just not divisible by this number
            continue
    # we went through ALL known primes, and never hit our return False...
    # which means, this wasn't divisible by any known prime, 
    # so it must be prime append
    known_primes.append(n)
    if(i == total_known_primes):
        return True
        
print is_prime(6)
print is_prime(8)
print is_prime(9)