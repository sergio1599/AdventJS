
const numbers = 0;

const result = 0;


function sumPairs(numbers, result) {

    let i = 0 
    let solution = null;
    
    numbers.some(num => {
        numbers.slice(++i).forEach(numSum => {
            if (num + numSum === result) {
                solution = [num, numSum]
            }
        });
        return Boolean(solution)
    })
    return solution;
}

const sum = (sumPairs(sum, result));

console.log(sum);