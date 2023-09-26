function BinarySearch(arr, val){
    let low = 0;
    let high = arr.length;
    let mid = Math.floor((low+high)/2); 
    while(low <= high){
        mid = Math.floor((low+high)/2)
        if(arr[mid] === val){
            return mid;
        }
        else if(arr[mid] > val){
            high = mid-1;
        }else if(arr[mid] < val){
            low = mid+1;
        }
    }
    return "Value not found";
}

let arr = [1,2,3,4,5,6,7,12,56];
console.log(BinarySearch(arr,3)); //2
console.log(BinarySearch(arr,1)); //0
console.log(BinarySearch(arr,56)); //8
console.log(BinarySearch(arr,7)); //6
console.log(BinarySearch(arr,30)); //not found