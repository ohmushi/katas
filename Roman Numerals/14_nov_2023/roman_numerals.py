# https://codingdojo.org/kata/RomanNumerals/

romans = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
}

arabics = dict(zip(romans.values(), romans.keys()))

def arabic_to_roman(arabic):
    if(arabic <= 0): return ''
    if arabic in romans : return romans[arabic]
    for a, r in reversed(romans.items()):
        if(a <= arabic):
            return f'{r}{arabic_to_roman(arabic - a)}'
        
def roman_to_arabic(roman) :
    if len(roman) == 0 : return 0
    if roman in arabics : return arabics[roman]
    if(roman[0:2] in arabics) : return arabics[roman[0:2]] + roman_to_arabic(roman[2:])
    if(roman[0:1] in arabics) : return arabics[roman[0:1]] + roman_to_arabic(roman[1:])
    return 0
        

print(f'1 -> {arabic_to_roman(1)}')
print(f'3 -> {arabic_to_roman(3)}')
print(f'4 -> {arabic_to_roman(4)}')
print(f'5 -> {arabic_to_roman(5)}')
print(f'7 -> {arabic_to_roman(7)}')
print(f'9 -> {arabic_to_roman(9)}')
print(f'10 -> {arabic_to_roman(10)}')
print(f'14 -> {arabic_to_roman(14)}')
print(f'19 -> {arabic_to_roman(19)}')
print(f'2023 -> {arabic_to_roman(2023)}')
print(f'40 -> {arabic_to_roman(40)}')
print(f'90 -> {arabic_to_roman(90)}')
print(f'99 -> {arabic_to_roman(99)}')
print(f'900 -> {arabic_to_roman(900)}')

print(f'I -> {roman_to_arabic("I")}')
print(f'III -> {roman_to_arabic("III")}')
print(f'IV -> {roman_to_arabic("IV")}')
print(f'V -> {roman_to_arabic("V")}')
print(f'VII -> {roman_to_arabic("VII")}')
print(f'IX -> {roman_to_arabic("IX")}')
print(f'X -> {roman_to_arabic("X")}')
print(f'XIV -> {roman_to_arabic("XIV")}')
print(f'XIX -> {roman_to_arabic("XIX")}')
print(f'MMXXIII -> {roman_to_arabic("MMXXIII")}')
print(f'XL -> {roman_to_arabic("XL")}')
print(f'XC -> {roman_to_arabic("XC")}')
print(f'XCIX -> {roman_to_arabic("XCIX")}')
print(f'CM -> {roman_to_arabic("CM")}')
