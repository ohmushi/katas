# https://codingdojo.org/kata/FizzBuzz/

# Write a program that prints the numbers from 1 to 100.
# But for multiples of three print “Fizz” instead of the
# number and for the multiples of five print “Buzz”.
# For numbers which are multiples of both three and five print “FizzBuzz “.

def contains_3(n):
    return 'Fizz' if '3' in str(n) else ''


def contains_5(n):
    return 'Buzz' if '5' in str(n) else ''


def divided_by_3(n):
    return 'Fizz' if n % 3 == 0 else ''


def divided_by_5(n):
    return 'Buzz' if n % 5 == 0 else ''


def fizzbuzz_of(n, rules):
    res = ''

    for rule in rules:
        res += rule(n)

    return n if res == '' else res


def fizzbuzz():
    rules = [
        contains_3,
        contains_5,
        divided_by_3,
        divided_by_5
    ]
    for i in range(1, 101):
        print(fizzbuzz_of(i, rules))


fizzbuzz()
