/*
Find all the pairs of two integers in an unsorted array that sum up to a given S. For example, if the array is 
[3, 5, 2, -4, 8, 11] and the sum is 7, your program should return [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7.
*/

// returning pairs of integers that add up to 7

let allPairs = [];
function pairFinder(arr, target){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(i != j && arr[i] + arr[j] === target){
                let pairs = [];
                pairs.add(arr[i]);
                pairs.add(arr[j]);
                allPairs.add(pairs);
            }
        }
    }
    return allPairs;
}

let target = 7;
let array = [3, 5, 2, -4, 8, 11];
console.log(pairFinder(array, target));