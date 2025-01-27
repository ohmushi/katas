// 2025-01_26.ts
// run with :
// npx tsx 2025-01_26.ts

namespace RPN {
    interface Operator {
        eval(a: number, b: number): number;
    }

    const operators = new Map<string, Operator>([
        ['/', {eval: (b, a) => a / b}],
        ['+', {eval: (b, a) => a + b}],
        ['-', {eval: (b, a) => a - b}],
    ]);
    
    function operator(op: string): Operator {
        return operators.get(op) 
                ?? {eval: () => {throw new Error(`Unexpected operator [${op}].`)}};
    }

    export function of_string(str: string): number {
        return compute(str.split(' '));
    }

    export function compute(stack: string[]): number {
        if(stack.length < 3) throw new Error(`Unvalid input ${stack.toString()}`)
        if(stack.length === 3) return operator(stack.pop()!).eval(+stack.pop()!, +stack.pop()!);
        else return operator(stack.pop()!).eval(+stack.pop()!, compute(stack));
    }
}



function assert_actual_equals_expected(actual: number, expected: number): void {
    
    console.assert(actual === expected, `expected [${expected}] but got [${actual}]`);
}

assert_actual_equals_expected(RPN.of_string('20 5 /'), 4);
assert_actual_equals_expected(RPN.of_string('4 2 + 3 -'), 3);

console.log('OK');
