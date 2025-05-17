import { expect, test } from "vitest";

import { fizzbuzzFor } from '../src/fizzbuzz';

// TDD Test Driven Development

test('1 is 1', () => {
    expect(fizzbuzzFor(1)).toBe('1');
})

test('2 is 2', () => {
    expect(fizzbuzzFor(2)).toBe('2');
})

test('3 is fizz', () => {
    expect(fizzbuzzFor(3)).toBe('fizzfizz');
})

test('divisible by 3 is fizz', () => {
    expect(fizzbuzzFor(6)).toBe('fizz');
    expect(fizzbuzzFor(9)).toBe('fizz');
    expect(fizzbuzzFor(12)).toBe('fizz');
})

test('divisible by 5 is buzz', () => {
    expect(fizzbuzzFor(5)).toBe('buzzbuzz');
    expect(fizzbuzzFor(10)).toBe('buzz');
})

test('divisible by 3 and 5 is fizzbuzz', () => {
    expect(fizzbuzzFor(15)).toBe('fizzbuzzbuzz');
    expect(fizzbuzzFor(30)).toBe('fizzbuzzfizz');
})

test('contains 3 is fizz', () => {
    expect(fizzbuzzFor(13)).toBe('fizz');
})

test('contains 5 is fizz', () => {
    expect(fizzbuzzFor((52))).toBe('buzz');
})

test('contains 5 and 3 is fizzbuzz', () => {
    expect(fizzbuzzFor((53))).toBe('fizzbuzz');
})
