function countZeroes(arr){
    // add whatever parameters you deem necessary - good luck!!!
    arr = arr.sort();
    let i = 0;
    let mid = Math.floor((i+arr.length)/2);
    console.log(arr,i, mid);
    
    if(arr[mid] !== 0){
        i = mid-1;
    }
    while(arr[mid] === 0 && arr[mid+1] === 0){
         i = mid+1;
         mid = Math.floor((i+arr.length)/2);
    }
    console.log(mid+1);
    
}

countZeroes([0,1]);