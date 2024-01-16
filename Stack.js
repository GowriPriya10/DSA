const Node = (value) => {
    return {
        value,
        next: null
    }
}


class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(value) {
        const node = Node(value);
        if(this.size === 0){
            this.head = node; 
            this.tail = node; 
        } else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
        return this.size;
    }

    pop() {
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

    getStack(){
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

const stack = new Stack();

console.log(stack.push(10)) // 1 
console.log(stack.head.value) // 10 
console.log(stack.tail.value) // 10 
console.log(stack.push(100)); //2
console.log(stack.head.value) // 100 
console.log(stack.tail.value) // 10 
console.log(stack.push(1000)); //3
console.log(stack.head.value) // 1000 
console.log(stack.tail.value) // 10

console.log(stack.getStack());

console.log("----pop------");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.getStack());
