// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    // Type 1 - Use Sorting
    /**
     * TC - O(n log n) 
     * SC - O(n)
     * 
     * 1. Sort all the nums in an array 
     * 2. Traverse through the sorted array and check if current and next num is same or not
     * 3. True? contains Duplicates. False ? does not contain duplicate
     */
    sort(nums);

    // Type 2 - Using Hash Map
    /**
     * TC - O(n)
     * SC - O(n)
     * 
     * 1. Create an empty map which will have the key as 'num' and
     *    value as count of occurrences of that num.
     * 2. Traverse through the array and populate the hash map.
     * 3. Anywhere if found that a key is already havig a value of 1 return true (contains duplicates)
     * 4. At last return false.
     */
    map(nums);


    // Type 3 - Using Set
    /**
     * TC - O(n)
     * SC - O(n)
     * 
     * 1. Convert the nums array to set using Set().
     * 2. If the set's length is equal to the nums length, there are no duplicates
     * 3. If not, it contains dulicates
     */
    set(nums);
};

const sort = (nums) => {

    nums = nums.sort((a,b) => a - b);
    for(let i = 0;i< nums.length; i++){
        if(nums[i] === nums[i+1])
            return true;
    }
    
    return false;
}

const map = (nums) => {
    const map = new Map();
    for(let n of nums) {
        if(map[n]) {
            return true
        }else {
            map[n] = 1;
        }
    }
    return false;
}

const set = (nums) => {
    return new Set(nums).size() === nums.length;
}
