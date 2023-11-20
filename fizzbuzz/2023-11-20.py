# https://codingdojo.org/kata/FizzBuzz/

# Write a program that prints the numbers from 1 to 100.
# But for multiples of three print “Fizz” instead of the
# number and for the multiples of five print “Buzz”.
# For numbers which are multiples of both three and five print “FizzBuzz “.

def fizzbuzz_of(n):
    res = ''

    if '3' in str(n): res += 'Fizz'
    if '5' in str(n): res += 'Buzz'
    if n % 3 == 0: res += 'Fizz'
    if n % 5 == 0: res += 'Buzz'

    return n if res == '' else res


def fizzbuzz():
    for i in range(1, 101):
        print(fizzbuzz_of(i))


fizzbuzz()
