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

 /*
 countUniqueValues which accepts a sorted array and counts the unique values in the array, negative numbers are allowed.

function countUniqueValues(arr) {
    let obj = {};
    let count = 0;
    // console.log(arr[0]);
    for(let i = 0; i < arr.length; i++){
        // console.log("hi");
        // console.log(arr[i]);
        if(!(obj[arr[i]])){
            obj[arr[i]] = 1;
            count++;
        }
    }
    return count;
    // return obj.length;
};

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))

instructor solution
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])
*/
function countUniqueValues(arr) {
    let index = 0;
    // let value = 0;
    for(let i = 0; i < arr.length; i++){
        if(i === 0) {
            arr[index] = index + 1;
            index++;
            // value = arr[i];
        }else if(arr[i] !== arr[index]){
            arr[index] = index + 1;
            index++;
            // value = arr[i];
        }
    }
    return arr[index];
};

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))