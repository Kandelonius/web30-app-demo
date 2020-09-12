/**
 * given a sorted array of integers which includes negatives find a number combination that sums to 0.
 * 
 * naive solution involves nested for loops.
 * 
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}


sumZero([-4,-3,-2,-1,0,1,2,5])

refactored solution moving inward using a while loop and if statements

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
    }
    return "not found"
}

console.log("the first combination found is " + sumZero([-4, -3, -2, -1, 0, 1, 2, 5]))
console.log("the first combination found is " + sumZero([-4, -3, -2, -1, 0, 5, 6, 8]))
 */