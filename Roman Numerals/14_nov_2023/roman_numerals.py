# https://codingdojo.org/kata/RomanNumerals/

roman = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
}

def arabic_to_roman(arabic):
    if(arabic <= 0): return ''
    if arabic in roman :
        return roman[arabic]
    elif (arabic+1 in roman) :
        return f'I{roman[arabic+1]}'
    else :
        for a, r in reversed(roman.items()):
            if(a <= arabic): 
                return f'{r}{arabic_to_roman(arabic - a)}'
        

print(f'1 -> {arabic_to_roman(1)}')
print(f'3 -> {arabic_to_roman(3)}')
print(f'4 -> {arabic_to_roman(4)}')
print(f'5 -> {arabic_to_roman(5)}')
print(f'7 -> {arabic_to_roman(7)}')
print(f'9 -> {arabic_to_roman(9)}')
print(f'10 -> {arabic_to_roman(10)}')
print(f'14 -> {arabic_to_roman(14)}')
print(f'2023 -> {arabic_to_roman(2023)}')