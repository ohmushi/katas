# https://codingdojo.org/kata/FizzBuzz/


# Write a program that prints the numbers from 1 to 100.
# But for multiples of three print “Fizz” instead of the
# number and for the multiples of five print “Buzz”.
# For numbers which are multiples of both three and five print “FizzBuzz “.


def number_contains_digit(x, n, res):
    return res if str(n) in str(x) else ''

def number_is_divided_by_n(x, n, res):
    return res if x % n == 0 else ''

def fizzbuzz_of(n, rules):
    res = ''

    for rule in rules:
        res += rule(n)

    return n if res == '' else res


def fizzbuzz():
    rules = [
        lambda number: number_contains_digit(number, 3, 'Fizz'),
        lambda number: number_is_divided_by_n(number, 3, 'Fizz'),
        lambda number: number_contains_digit(number, 5, 'Buzz'),
        lambda number: number_is_divided_by_n(number, 5, 'Buzz'),
    ]
    for i in range(1, 101):
        print(fizzbuzz_of(i, rules))


fizzbuzz()
