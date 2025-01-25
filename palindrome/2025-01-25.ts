// 2025-01-25.ts
// 
// run with :
// npx tsx 2025-01-25.ts


function palindrome(str: string): boolean {
    for(let i = 0; i < str.length / 2; i++) {
        if(str[i] !== str[str.length - i - 1]) return false;
    }
    return true;
}


console.assert(palindrome('aba'), 'aba');
console.assert(palindrome('kayak'), 'kayak');
console.assert(palindrome('())('), '())( ... very disturbing');
console.assert(palindrome('a'), 'a');
console.assert(palindrome('bb'), 'bb');

console.assert(!palindrome('abc'), 'abc');
console.assert(!palindrome('girafe'), 'girafe');
console.assert(!palindrome('()()'), '()() ... no it is not');
console.assert(!palindrome('ab'), 'ab');
