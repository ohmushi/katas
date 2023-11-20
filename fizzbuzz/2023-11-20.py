# https://codingdojo.org/kata/FizzBuzz/

# Write a program that prints the numbers from 1 to 100.
# But for multiples of three print “Fizz” instead of the
# number and for the multiples of five print “Buzz”.
# For numbers which are multiples of both three and five print “FizzBuzz “.

def number_fizz_or_buzz(n):
    if (n % 3 == 0 and n % 5 == 0): return 'FizzBuzz'
    if(n % 3 == 0) : return 'Fizz'
    if (n % 5 == 0): return 'Buzz'
    return n

def fizzbuzz():
    for i in range(1, 101):
        print(number_fizz_or_buzz(i))



fizzbuzz()