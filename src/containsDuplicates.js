var containsDuplicate = function(nums) {
    if(nums.length < 2) {
        return false;
    }
    hash = {};
    for(let i = 0; i < nums.length; i++) {
        if(hash[nums[i]] === 1) {
            return true;
        } else {
            hash[nums[i]] = 1;
        }
    }
    return false;
};

array = [3, 8]
console.log(containsDuplicate(array));