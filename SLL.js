const Node = (value) => {
    return {
        value,
        next: null
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // inseet at tail
    addNode(value) {
        let node = Node(value);
        if(this.size < 1) {
            this.head = node;
        }else {
           let temp = this.head;
           while(temp.next) {
                temp = temp.next;
           }
           temp.next = node;
        }
        this.size++;
        return this;
    }

    // insert at head
    unshift(value) {
        let node = Node(value);
        node.next = this.head;
        this.head = node;
        this.size++;
        return this;
    }

    // insert at pos k
    insertAtPos(k, value) {
        if(k > 0 && k <= this.size+1) {
            if(k === 1) {
                return this.unshift(value);
            }else if(k === this.size+1){
                return this.addNode(value);
            }else{
                let temp = this.head;
                let i = 1;
                while(temp !== null) {
                    if(i+1 === k){
                        let node = Node(value);
                        node.next = temp.next;
                        temp.next = node;
                        this.size++;
                        break;
                    }else {
                        i++;
                        temp = temp.next;
                    }
                }
                return this;
            }
        }
        return null;
    }

    //insert before data node of value K
    insertBeforeVal(value, k) {
        if(this.head.value === k) {
            return this.unshift(value);
        }
        let temp = this.head;
        while(temp.next) {
            if(temp.next.value === k) {
                let node = Node(value);
                node.next = temp.next;
                temp.next = node;
                this.size++;
                break;
            }else {
                temp = temp.next;
            }
        }
        if(!temp.next) {
            return 'node not found';
        }
        return this;
    }

    // remove head node
    shift() {
        if(this.head){
            this.head = this.head.next;
            this.size--;
        }
        return this;
    }

    // remove tail node
    delete() {
        if(this.head) {
            let temp = this.head;
            let prev = null;
            while(temp.next) {
                prev = temp;
                temp = temp.next;
            }
            if(prev === null) {
                this.head = prev;
            }else {
                prev.next = null;
            }
            this.size--;
        }
        return this;
    }

    deleteAtPos(k) {
        if(k > 0 && k <= this.size+1){
            let i = 1;
            let temp = this.head;
            let prev = null;
            while(temp !== null) {
                if(i === k) {
                    if(prev === null) {
                        this.head = temp.next;
                    }else {
                        prev.next = temp.next;
                        temp.next = null;
                    }
                    this.size--;
                    break;
                }else {
                    i++;
                    prev = temp;
                    temp = temp.next;
                }
            }
            return this;
        }
        return 'Invalid Position';
    }

    getLength() {
        let temp = this.head;
        let c = 0;
        while(temp && temp.next) {
            c++;
            temp = temp.next;
        }
        return ++c;
    }

    contains(value) {
        let temp = this.head;
        while(temp !== null) {
            if(temp.value === value) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }

    reverse() {
        if(this.head){
            let prev = null;
            let current = this.head;
            let next = current.next;
            while(current.next) {
                current.next = prev;
                prev = current;
                current = next;
                next = current.next;
            }
            current.next = prev;
            this.head = current;
        }
        return this;
    }

    recursiveReverse(head) {
        if(head === null || head.next === null) {
            return head;
        }

        const newHead = this.recursiveReverse(head.next); 
       
        const temp = head.next;
        temp.next = head;
        head.next = null;

        return newHead;
    }
}

function convertArrayToList(arr) {
    const list = new SLL();
    for(let num of arr) {
        list.addNode(num);
    }
    return list;
}

const sll = new SLL();
sll.addNode(2);
sll.addNode(10);
sll.addNode(5);
sll.addNode(3);
sll.addNode(9);
console.log(sll.size);
console.log(JSON.stringify(sll.head));
console.log(sll.getLength());
console.log(sll.contains(3));
console.log(sll.contains(16));
console.log(JSON.stringify(convertArrayToList([4,8,3,18,6,2])));
console.log(JSON.stringify(sll.shift()));
console.log(JSON.stringify(sll.delete()));
console.log(JSON.stringify(sll.deleteAtPos(2)));
console.log(JSON.stringify(sll.deleteAtPos(5)));
console.log(JSON.stringify(sll.deleteAtPos(1)));
console.log(JSON.stringify(sll.deleteAtPos(1)));
console.log(JSON.stringify(sll.unshift(1)));
console.log(JSON.stringify(sll.unshift(2)));
console.log(JSON.stringify(sll.unshift(3)));
console.log(JSON.stringify(sll.unshift(4)));
console.log(JSON.stringify(sll.insertAtPos(2, 5)));
console.log(JSON.stringify(sll.insertAtPos(0, 5)));
console.log(JSON.stringify(sll.insertAtPos(1, 6)));
console.log(JSON.stringify(sll.insertAtPos(7, 7)));
console.log(JSON.stringify(sll.insertBeforeVal(8, 7)));
console.log(JSON.stringify(sll.insertBeforeVal(0, 6)));
console.log(JSON.stringify(sll.insertBeforeVal(10, 4)));
console.log('---print---')
console.log(JSON.stringify(sll));
console.log('---rev---')
console.log(JSON.stringify(sll.reverse()));
console.log('---recursive rev---')
console.log(JSON.stringify(sll.recursiveReverse(sll.head)));
