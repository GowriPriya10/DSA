//Creating node class to define each node which will have a value and pointer to next node
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

//SLL class which has all the methods & head, tail, length associated with it.
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //inserts a value into the list and returns the list
    push(val){
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
            this.length++;
        
        return this;
    }

    //Removes the node at the end and returns it.
    pop(){
        if(this.head === null){
            return undefined;
        }
        let curr = this.head;
        let removed;
        if(curr === this.tail){
            removed = curr;
            this.head = null;
            this.tail = null; 
        }else{
            while(curr.next !== this.tail){
                curr = curr.next;
            }
            this.tail = curr;
            removed = curr.next;
            curr.next = null;
        }
        this.length--;
        return removed;
    }

    //Get the value of node at a particular index
    get(id){
        let index = id+1;
        if(index < 1 || index > this.length){
            console.log("Invalid index");
            return null;
        }
        let curr = this.head;
        let i = 1;
        while(i !== index){
            curr = curr.next;
            i++;
        }
        //console.log(curr.val+ " "+ index);
        return curr;
    }

    //Updates the value at the mentioned index
    set(id, val){
        let index = id+1;
        if(index < 1 || index > this.length){
            console.log("Invalid index");
            return false;
        }
        if(index === this.length){
            this.tail.val = val;
        }else if(index === 1){
            this.head.val = val;
        }else{
            let curr = this.head;
            let i = 1;
            while(i !== index){
                curr = curr.next;
                i++;
            }
            curr.val = val;
        }
        return true;
    }


    //Inserts the value at the mentioned index
    insert(index, val){
        if(index < 1 || index > this.length+1){
            console.log("Invalid index");
            return false;
        }
        let newNode = new Node(val);
        let prevNode;
        if(index === 1){
            newNode.next = this.head;
            this.head = newNode;
        }else{
            prevNode = this.get(index-1);
            if(prevNode){
                newNode.next = prevNode.next;
                prevNode.next = newNode;
                if(index === this.length){
                    this.tail = newNode;
                }
            }
        }
        this.length++;
        return true;
    }

    //Removes the node at mentioned index & returns removed node
    remove(index){
        if(index < 1 || index > this.length){
            console.log('Cant remove, Invalid index');
            return undefined;
        }
        let curr;
        if(index === 1){
            curr = this.head;
            this.head = curr.next;
            curr.next = null;
        }else{
            let prev = this.get(index-1);
            if(prev){
                curr = prev.next;
                prev.next = curr.next;
                curr.next = null;
                if(index === this.length){
                    this.tail = prev;
                }
            }
        }
        this.length--;
        return curr;
    }

    //prints the node values of the list
    print(){
        if(this.head === null){
            console.log([]);
            return;
        }
        let current = this.head;
        let result = [];
        while(current.next){
            result.push(current.val);
            current = current.next;
        }
        result.push(current.val);
        console.log(result);
        return result;
    }


    //                                                         rotate by 2 
    //rotate the list by a value Eg: 1 -> 2 -> 3 -> 4 -> 5 =================> 3 -> 4 -> 5 -> 1 -> 2
    rotate(val){
        let curr = this.head;
        let arr = this.print();
        console.log("arr = "+arr);
        curr = this.head
        let i = 0;
        if(val < 0){
            val = arr.length + val;
        }
        while(curr){
            curr.val = arr[(i+val)%arr.length];
            curr = curr.next;
            i++;
        }
    }

}

// let list = new SinglyLinkedList();
// list.push(5).push(10).push(15).push(20).push(25);
// console.log(list.insert(2,12)); // true
// list.print();
// console.log(list.insert(100,12)); // false
// console.log(list.length); // 5
// console.log(list.head.val); // 5
// console.log(list.head.next.val); // 10
// console.log(list.head.next.next.val); // 12
// console.log(list.head.next.next.next.val); // 15
// console.log(list.head.next.next.next.next.val); // 20
// console.log(list.insert(5,25)); // true
// console.log(list.head.next.next.next.next.next.val); //25
// console.log(list.tail.val); // 25

// list = new SinglyLinkedList();
// list.push(1).push(2).push(3).push(4).push(5);
// list.rotate(-1);
// list.print();
// console.log(list.head.val); //25
// console.log(list.head.next.val); //5
// console.log(list.head.next.next.val); //10
// console.log(list.head.next.next.next.val); //15
// console.log(list.head.next.next.next.next.val); //20
// console.log(list.tail.val); //20
// console.log(list.tail.next); //null

// list.rotate(-1);
// list.print();
// console.log(list.head.val);
// console.log(list.tail.val);

// let list = new list();

// list.push(5).push(20).push(12).push(34);

// list.print();

// console.log(list.pop().val);
// console.log(list.pop().val);
// console.log(list.pop().val);
// console.log(list.pop().val);
// console.log(list.pop().val);

// list.push(5).push(20).push(12).push(34);

// list.get(-1);
// list.get(1);
// list.get(2);
// list.get(3);
// list.get(4);
// list.get(5);

// list.print();

// list.set(23, 2);
// list.set(100, 9);
// list.set(98, 0);
// list.set(34, 4);

// list.print();

// list.insert(8, 0);
// list.insert(8, 1);
// console.log(list.head," ",list.length);
// list.insert(10,6);
// console.log(list.tail," ",list.length);
// list.insert(5, 3);
// console.log(list.length);
// list.insert(10,-1);
// list.print();

// list.remove(-1);
// list.print(); 
// console.log(list.length);
// list.remove(1);
// list.print(); 
// console.log("head = "+list.head.val+" "+list.length);
// list.remove(6);
// list.print(); 
// console.log("tail = "+list.tail.val+" "+list.length);
// list.remove(3);
// list.print(); 
// console.log(list.length);