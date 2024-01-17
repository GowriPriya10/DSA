class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // insert after tail
    addNode(value) {
        const node = new Node(value);
        if(this.size === 0) {
            this.head = node;
            this.tail = node;
        }else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
        return this;
    }

    // insert before head
    unshift(value) {
        const node = new Node(value);
        if(this.head !== null){
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }else {
            this.head = node;
            this.tail = node;
        }
        this.size++;
        return this;
    }

    // insert before k position
    insertBeforePos(k, value) {
        let node = new Node(value);
        if(k === 1) {
            return this.shift(value);
        }else if(k === this.size+1) {
            node.prev = this.tail.prev;
            node.next = this.tail;
            this.tail.prev.next = node;
            this.tail.prev = node;
        }else {
            let i = 2;
            let temp = this.head.next;
            while(temp.next) {
                if(i === k) {
                    node.prev = temp.prev;
                    node.next = temp;
                    temp.prev.next = node;
                    temp.prev = node;
                }
                i++;
                temp = temp.next;
            }
        }
        this.size++;
        return this;
    }

    // remove tail node
    delete() {
        if(this.tail) {
            const node = this.tail;
            if(this.tail.prev){
                this.tail.prev.next = null;
                this.tail = this.tail.prev;
                node.prev = null;
            }else {
                this.tail = null;
                this.head = null;
            }
            this.size--;
        }
        return this;
    }
    // remove head node
    shift() {
        if(this.head) {
            const node = this.head;
            if(node.next) {
                node.next.prev = null;
                this.head = node.next;
                node.next = null;
            }else {
                this.head = null;
                this.tail = null;
            }
            this.size--;
        }
        return this;
    }

    // remove node at K position
    deleteAtPos(k) {
        if(k === 1) {
            return this.shift();
        }else if(k === this.size) {
            return this.delete();
        }else {
            let i = 2;
            let temp = this.head.next;
            while(temp.next) {
                if(i === k) {
                    temp.prev.next = temp.next;
                    temp.next.prev = temp.prev;
                    temp.prev = null;
                    temp.next = null;
                    break;
                }else{
                    i++;
                    temp = temp.next;
                }
            }
            this.size--;
        }
        return this;
    }

    getLength() {
        let temp = this.head;
        let c = 0;
        while(temp !== null) {
            c++;
            temp = temp.next;
        }
        return c;
    }

    reverse() {
        let temp = this.head;
        let prev = null;
        this.tail = temp;
        while(temp !== null) {
            temp.prev = temp.next;
            temp.next = prev;
            prev = temp;
            temp = temp.prev;
        }
        this.head = prev;
        return prev;
    }

    print(head) {
        let res = [];
        while (head !== null) {
            res.push(head.value);
            head = head.next;
        }
        return res;
    }
}

const dll = new DLL();
console.log(JSON.stringify(dll.addNode(1)));
console.log(dll.addNode(2).head);
console.log(dll.addNode(3).head);
console.log(dll.size);
console.log(dll.unshift(0).head);
console.log(dll.unshift(-1).head);
console.log(dll.size);
console.log(dll.insertBeforePos(2, 5).head);
console.log('tail --- ', dll.tail);
console.log(dll.insertBeforePos(7, 6).tail);
console.log(dll.insertBeforePos(1, 10).head);
console.log(dll.size);
console.log(dll.print(dll.head));
console.log("----Delete----");
console.log(dll.print(dll.delete().head));
console.log(dll.print(dll.delete().head));
console.log(dll.print(dll.delete().head));
console.log("----Shift----");
console.log(dll.print(dll.shift().head));
console.log(dll.print(dll.shift().head));
console.log(dll.print(dll.shift().head));
console.log(dll.print(dll.shift().head));
dll.addNode(1);
dll.addNode(2);
dll.addNode(3);
dll.addNode(4);
dll.addNode(5);
console.log(dll.print(dll.head));
console.log(dll.print(dll.deleteAtPos(1).head));
console.log(dll.print(dll.deleteAtPos(4).head));
console.log(dll.print(dll.deleteAtPos(2).head));
dll.addNode(1);
dll.addNode(5);
console.log(dll.print(dll.head));
console.log(dll.print(dll.reverse()));
console.log('head --- ', dll.head);
console.log('tail --- ', dll.tail);
