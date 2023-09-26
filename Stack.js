class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        let node = new Node(val);
        if(this.size === 0){
            this.first = node; 
            this.last = node; 
        } else{
            node.next = this.first;
            this.first = node;
        }
        this.size++;
        return this.size;
    }

    pop(){
        if(this.size < 1){
            return undefined;
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
        return removed;
    }

    print(){
        if(this.first === null){
            console.log([]);
            return;
        }
        let current = this.first;
        let result = [];
        while(current.next){
            result.push(current.val);
            current = current.next;
        }
        result.push(current.val);
        console.log(result);
        return result;
    }
}

let stack = new Stack();


console.log(stack.push(10)) // 1 
console.log(stack.first.value) // 10 
console.log(stack.last.value) // 10 
console.log(stack.push(100)); //2
console.log(stack.first.value) // 100 
console.log(stack.last.value) // 10 
console.log(stack.push(1000)); //3
console.log(stack.first.value) // 1000 
console.log(stack.last.value) // 10

console.log("----pop------");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());