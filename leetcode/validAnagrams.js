// https://leetcode.com/problems/valid-anagram/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    /**
     * 1. Length of both strings should be same for them to be anagrams
     * 2. (a) Sort the strings alphabetically and compare for equality. 
     *          TC - O(n log n)
     *          SC - O(n)
     * 
     *    (b) Traverse through a string and remove that specific letter from other string. 
     *          At last if other string is empty, then they are Anagrams.
     *          TC - O(n)
     *          SC - No extra space
     * 
     *    (c) Create a map. Traverse through each string and 
     *          for one string increase the freq. of that letter and
     *          for another string decrease the freq. of that letter in map.
     *          If map is empty, it is anagram.
     *          
     * 
     *          TC - O(n)
     *          SC - O(k) [k - length of char set]
     */

    if(s.length !== t.length)
        return false;

    // (a)
        sort(s, t);

    // (b)
        arrays(s,t);
};

const sort = (s, t) => {
    return (s.split('').sort().join('') === t.split('').sort().join(''));
}

const arrays = (s, t) => {
    for(let i of s) {
        t = t.replace(i,'')
    }
    return t.length  ? false : true; 
}

const map = (s, t) => {
    let map = new Map();

    for(let i of s){
        map[i] = map[i] ? ++map[i] : 1;
    }

    for(let i of t) {
        if(map[i]){
            map[i] == --map[i]
        }
        
        if(map[i] === 0){
            delete map[i];
        }
    }

    return Object.keys(map).length === 0 ? true : false;
}