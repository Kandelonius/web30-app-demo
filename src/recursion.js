// Helper Method Recursion is a design pattern
function helperCollectOdd(arr) {
    let result = []
    // helper Method Recursion
    function helper(helperInput) {
        if(helperInput.length === 0) { // base case
            return;
        }
        if(helperInput[0] % 2 !== 0) { // check if the number is not even
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result;
}

function strictCollectOdd(arr) {
    let result = []
    if(arr.length === 0) {
        return result;
    }
    if(arr[0] % 2 !== 0) {
        result.push(arr[0]);
    }
    result = result.concat(strictCollectOdd(arr.slice(1)));
    return result;
}

ints = [1, 2, 4, 6, 7, 10, 55];
console.log(helperCollectOdd(ints));
console.log(strictCollectOdd(ints));