class BinarySearch {
    constructor(nums) {
        this.nums = nums;
    }

    search(target) {
        let left = 0;
        let right = this.nums.length - 1;

        while(left <= right){
            let mid = Math.floor((left+right)/2);
            if(this.nums[mid] === target) {
                return mid;
            }
            if(this.nums[mid] > target) {
                right = mid - 1;
            }else {
                left = mid + 1;
            }
        }

        return -1;
    }
}

const bs  = new BinarySearch([-1,0,3,5,9,12]);

console.log(bs.search(10));
console.log(bs.search(9));
console.log(bs.search(-1));
