import { test, expect } from 'vitest';
import { translate } from '../src/shodo'

test('a should be あ', () => {
    expect(translate('a')).toBe('あ');
})


const one_letter_syllabe_to_kana = {
    "a": "あ",
    "i": "い",
    "u": "う",
    "e": "え",
    "o": "お",
    "n" : "ん",
}
test('one letter syllabe', () => {
    for(let syllabe in one_letter_syllabe_to_kana) {
        expect(translate(syllabe)).toBe(one_letter_syllabe_to_kana[syllabe]);
    }
})


test('unknown input should be empty', () => {
    expect(translate('z')).toBe('');
})

test('ka should be か', () => {
    expect(translate('ka')).toBe('か');
})

const two_letters_syllabe_to_kanna = {
    "ka": "か",
    "ki": "き",
    "ku": "く",
    "ke": "け",
    "ko": "こ",
    "sa" : "さ",
}

test('two letters syllabe', () => {
    for(let syllabe in two_letters_syllabe_to_kanna) {
        expect(translate(syllabe)).toBe(two_letters_syllabe_to_kanna[syllabe]);
    }
})

test('ai should be あい', () => {
    expect(translate('ai')).toBe('あい');
})

test('kon should be こん', () => {
    expect(translate('kon')).toBe('こん');
})

test('konni should be こんに', () => {
    expect(translate('konni')).toBe('こんに');
})

test('konnichiwa should be こんにちわ', () => {
    expect(translate('konnichiwa')).toBe('こんにちわ');
})

test('should be case insensitive', () => {
    expect(translate('KonNichiWa')).toBe('こんにちわ');
})