
/**
 * 
 * Condition: Value of each node is <= to its children
 * Parent index of node -> (i-1)/2
 * Left index of node -> (i * 2) + 1
 * Right index of node -> (i * 2) + 2
 * 
 */
class MinHeap {
    constructor() {
        this.heap = [];
    }

    parentIndex(i) {
        return Math.floor((i-1)/2);
    }

    leftIndex(i) {
       return (i * 2) + 1;
    }

    rightIndex(i) {
        return (i * 2) + 2;
    }

    parent(i) {
        return this.heap[this.parentIndex(i)];
    }

    left(i) {
        return this.heap[this.leftIndex(i)];
    }

    right(i) {
        return this.heap[this.rightIndex(i)];
    }

    hasLeft(i) {
        return this.leftIndex(i) < this.heap.length;
    }

    hasRight(i) {
        return this.rightIndex(i) < this.heap.length;
    }

    hasChild(i) {
        return this.hasLeft(i) || this.hasRight(i);
    }

    minChild(i) {
        let left = this.leftIndex(i);
        let right =  this.rightIndex(i);
        
        if(!this.hasLeft(i))
            return right
        
        if(!this.hasRight(i))
            return left

        return this.heap[left] < this.heap[right] ? left : right;
    }

    insert(val) {
        this.heap.push(val);
        this.upHeap();
        return this.heap;
    }

    upHeap() {
        let i = this.heap.length-1;
        while(this.parent(i) > this.heap[i]) {
            this.swap(this.parentIndex(i), i);
            i = this.parentIndex(i);
        }
    }

    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    remove() {

        if (this.heap.length === 0) {
            return null;
        }

        let node = this.heap[0];
        if(this.heap.length === 1) {
            this.heap = [];
        }else {
            this.heap[0] = this.heap.pop();

            let i = 0;
            while (this.hasChild(i) && (this.heap[i] > this.left(i) || this.heap[i] > this.right(i))) {

                let min = this.minChild(i);
                this.swap(min, i);
                i = min;
            }
        }

        return node;
    }

    heapSort() {
        let arr = [];
        while(this.heap.length > 0) {
            arr.push(this.remove());
        }

        return arr;
    }
}

const minHeap = new MinHeap();
let ele = [10,3,5,7,9,11,12,2,15,1];
ele.forEach((e) => {
    console.log(minHeap.insert(e));
})

// console.log(minHeap.remove());
// console.log(minHeap.remove());
console.log(minHeap.heapSort());
