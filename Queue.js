class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){
        let node = new Node(val);
        if(!this.size){
            this.first = node;
            this.last = node;
        }else{
            this.last.next = node;
            this.last = node;
        }
        return ++this.size;
    }

    dequeue(){
        if(this.size < 1){
            return null;
        }
        let removed = this.first;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        }else{
            this.first = this.first.next;
            removed.next = null;
        }
        this.size--;
        return removed.value;
    }
}

let q = new Queue();
console.log(q.enqueue(10));
console.log(q.enqueue(100));
console.log(q.enqueue(1000));
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());