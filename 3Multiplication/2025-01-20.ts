// 2025-01-20.ts

// run with:
// npx tsx 2025-01-20.ts

interface Array<T> {
    equals(o: Array<T>): boolean;
}

Array.prototype.equals = function(target: any[]): boolean { 
    if(target.length !== this.length) return false;
    for (let i = 0; i < this.length; i++) {
        if(this[i] !== target[i]) return false;
    }
    return true;
}

// complexity 2 * N^2
function three_multiplication(numbers: number[], target: number): number[] {
    let d: {[id: string]: number[]}  = {}
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if(i === j) continue;
            let diff = target / (numbers[i] * numbers[j]);
            if(diff in d) {
                if(d[diff].includes(numbers[i]) || d[diff].includes(numbers[j])) continue;
                d[diff].push(numbers[i], numbers[j]);
            } else {
                d[diff] = [numbers[i], numbers[j]]
            }
        }
    }
    
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] in d) {
            let n = numbers[i]
            return [n, d[n][0], d[n][1]] // not sure for d[n][0], d[n][1] ... is it always the two first ?
        }
    }
    
    return [-1];
}

console.assert(three_multiplication([1,2,3,4,5], 30).equals([2,3,5]), `expect [2,3,5] was ${three_multiplication([3,2,1,4,5], 30)}`)
console.assert(
    three_multiplication([2,4,2,5,7,8,4,12,3,57,8,2,21,1,4,56,7,8,4,2,1,2,4,5,7,85,9,7,9,2], 24).equals([2, 4, 3]), 
     `expect [2, 4, 3] was ${three_multiplication([2,4,2,5,7,8,4,12,3,57,8,2,21,1,4,56,7,8,4,2,1,2,4,5,7,85,9,7,9,2], 24)}`
)

console.log('OK');