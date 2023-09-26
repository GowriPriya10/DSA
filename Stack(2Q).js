class Stack {
    constructor() {
        this.q1 = new Queue();
        this.q2 = new Queue();
    }
    push(val) {
        return this.q1.enqueue(val);
    }
    pop() {
        if(!this.q1.size){
            return null;
        }
        if(this.q1.size === 1){
            return this.q1.dequeue();
        }
        while (this.q1.size !== 1) {
            this.q2.enqueue(this.q1.dequeue());
        }
        let removed = this.q1.dequeue();
        this.q1 = this.q2;
        this.q2 = new Queue();
        return removed;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(data) {
        var node = new Node(data);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;

        var temp = this.first;
        if (this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

let s = new Stack();
console.log(s.push(10)); //1
console.log(s.push(23)); //2
console.log(s.push(34)); //3
console.log(s.pop());    //34 
console.log(s.push(145)); //3
console.log(s.push(2));  //4
console.log(s.push(150));  //5
console.log(s.pop());   //150
console.log(s.pop());   //2
console.log(s.pop());   //145
console.log(s.pop());  //23
console.log(s.pop());  //10
console.log(s.pop());  //null