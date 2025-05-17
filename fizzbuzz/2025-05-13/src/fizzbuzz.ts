
type rule = (x: number) => string;
const rules: rule[] = [
    (x: number) => (x % 3 === 0) ? 'fizz' : '',
    (x: number) => (x % 5 === 0) ? 'buzz' : '',
    (x: number) => (x.toString().includes('3')) ? 'fizz' : '',
    (x: number) => (x.toString().includes('5')) ? 'buzz' : '',
]

export const fizzbuzzFor = (x: number) => {
    let res = '';
    rules.forEach(rule => res += rule(x))
    return (res === '') ? x.toString() : res;
}

function fizzbuzz(n: number) {
    let res = '';
    for (let i = 1; i <= n; i++) {
        res += fizzbuzzFor(i) + '\n';
    }
    return res;
}

console.log(fizzbuzz(100));