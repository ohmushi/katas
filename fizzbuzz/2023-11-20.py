# https://codingdojo.org/kata/FizzBuzz/


# Write a program that prints the numbers from 1 to 100.
# But for multiples of three print “Fizz” instead of the
# number and for the multiples of five print “Buzz”.
# For numbers which are multiples of both three and five print “FizzBuzz “.


def number_contains_digit(x, n, res):
    return res if str(n) in str(x) else ''


def number_is_divided_by_n(x, n, res):
    return res if x % n == 0 else ''



def fizzbuzz():
    rules = {
        'contains_3': lambda number: number_contains_digit(number, 3, 'Fizz'),
        'divided_by_3': lambda number: number_is_divided_by_n(number, 3, 'Fizz'),
        'contains_5': lambda number: number_contains_digit(number, 5, 'Buzz'),
        'divided_by_5': lambda number: number_is_divided_by_n(number, 5, 'Buzz'),
    }

    def fizzbuzz_of(n, rules):
        res = ''
        for rule in rules.values(): res += rule(n)
        return n if res == '' else res

    for i in range(1, 101):
        print(fizzbuzz_of(i, rules))


fizzbuzz()
