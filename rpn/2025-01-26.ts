// 2025-01_26.ts
// run with :
// npx tsx 2025-01_26.ts


function rpn(str: string): number {
    function eval(operator: string, b: number, a: number): number {
        console.log(`eval ${a} ${operator} ${b}`);
        
        switch (operator) {
            case '/': return a / b;
            case '+': return a + b;
            case '-': return a - b;
            default: throw new Error(`Unexpected operator '${operator}'`);
        }
    }

    function _rpn(stack: string[]): number {
        if(stack.length < 3) throw new Error(`Unvalid input ${stack.toString()}`)
        if(stack.length === 3) return eval(stack.pop()!, +stack.pop()!, +stack.pop()!);
        else return eval(stack.pop()!, +stack.pop()!, _rpn(stack));
    }
    
    return _rpn(str.split(' '));
}

function assert_actual_equals_expected(actual: number, expected: number): void {
    console.assert(actual === expected, `expected [${expected}] but got [${expected}]`);
}

assert_actual_equals_expected(rpn('20 5 /'), 4);
assert_actual_equals_expected(rpn('4 2 + 3 -'), 3);

console.log('OK');
