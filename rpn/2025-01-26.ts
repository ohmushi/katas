// 2025-01_26.ts
// run with :
// npx tsx 2025-01_26.ts


function rpn(str: string): number {
    function operator(op: string) {
        function _eval(fn : (a: number, b: number) => number) {
            return {eval: (a: number, b: number) => fn(a,b)}
        }
        
        switch (op) {
            case '/': return _eval((b: number, a: number) => a / b);
            case '+': return _eval((b: number, a: number) => a + b);
            case '-': return _eval((b: number, a: number) => a - b);
            default: throw new Error(`Unexpected operator '${operator}'`);
        }
    }

    function _rpn(stack: string[]): number {
        if(stack.length < 3) throw new Error(`Unvalid input ${stack.toString()}`)
        if(stack.length === 3) return operator(stack.pop()!).eval(+stack.pop()!, +stack.pop()!);
        else return operator(stack.pop()!).eval(+stack.pop()!, _rpn(stack));
    }
    
    return _rpn(str.split(' '));
}

function assert_actual_equals_expected(actual: number, expected: number): void {
    
    console.assert(actual === expected, `expected [${expected}] but got [${actual}]`);
}

assert_actual_equals_expected(rpn('20 5 /'), 4);
assert_actual_equals_expected(rpn('4 2 + 3 -'), 3);

console.log('OK');
