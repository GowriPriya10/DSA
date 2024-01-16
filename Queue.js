const Node = (value) => {
    return {
        value,
        next: null
    }
}


class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(value) {
        const node = Node(value);
        if(this.size === 0){
            this.head = node; 
            this.tail = node; 
        } else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
        return this.size;
    }

    dequeue() {
        if(this.size < 1){
            return undefined;
        }
        let removed = this.head;
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head.next;
            removed.next = null;
        }
        this.size--;
        return removed;
    }

    getQueue(){
        let result = [];
        if(this.head !== null){
            let current = this.head;
            while(current.next){
                result.push(current.value);
                current = current.next;
            }
            result.push(current.value);
        }
        return result;
    }
}

const queue = new Queue();

console.log(queue.enqueue(10)) // 1 
console.log(queue.head.value) // 10 
console.log(queue.tail.value) // 10 
console.log(queue.enqueue(100)); //2
console.log(queue.head.value) // 10
console.log(queue.tail.value) // 100 
console.log(queue.enqueue(1000)); //3
console.log(queue.head.value) // 10 
console.log(queue.tail.value) // 1000

console.log(queue.getQueue());

console.log("----Dequeue------");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.getQueue());
