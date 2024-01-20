const QNode = (value) => {
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
        const node = QNode(value);
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



class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right= null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(val) {
        const node = new Node(val);
        if(!this.root){
            this.root = node;
            return;
        }
        const insertNewNode = (root, node) => {
            if(root.value > node.value){
                if(!root.left){
                    root.left = node;
                }else {
                    insertNewNode(root.left, node);
                }
            }else{
                if(!root.right){
                    root.right = node;
                }else{
                    insertNewNode(root.right, node);
                }
            }
        }  
        insertNewNode(this.root, node); 
    }

    search(val) {
        const searchNode = (root, val) => {
            
            if(!root){
                return false;
            }
            
            if(root.value === val) {
                return true;
            }
            else if(root.value > val) {
                return searchNode(root.left, val);
            }else {
                return searchNode(root.right, val);
            }
        }
        return searchNode(this.root, val);
    }

    isEmpty() {
        return this.root === null;
    }

    /**
     * 
     * BFS - Breadth First Search
     * 
     */

    levelOrder() {
        const res = [];
        const queue = new Queue();
        queue.enqueue(this.root);
        while(queue.head) {
            const node = queue.dequeue().value;
            res.push(node.value);
            if(node.left) {
                queue.enqueue(node.left);
            }
            if(node.right){
                queue.enqueue(node.right);
            }
        }
        return res;
    }

    /**
     * DFS - proOrder, inOrder, postOrder
     */
    // root, left, right
    preOrder(){
        const res = [];
        const traverse = (root) => {
            if(root){
                res.push(root.value);
                traverse(root.left);
                traverse(root.right);
            }
        }
        traverse(this.root);
        return res;
    }

    // left, root, right
    inOrder() {
        const res = [];
        const traverse = (root) => {
            if(root){
                traverse(root.left);
                res.push(root.value);
                traverse(root.right);
            }
        }
        traverse(this.root);
        return res;
    }

    // left, right, root
    postOrder() {
        const res = [];
        const traverse = (root) => {
            if(root){
                traverse(root.left);
                traverse(root.right);
                res.push(root.value);
            }
        }
        traverse(this.root);
        return res;
    }

    min() {
        const minVal = (root) => {
            if(!root.left) {
                return root.value;
            }
            return minVal(root.left);
        }
        return minVal(this.root);
    }

    max() {
        const maxVal = (root) => {
            if(!root.right) {
                return root.value;
            }
            return maxVal(root.right);
        }
        return maxVal(this.root);
    }

    depth() {
        const maxLevel = (root, level) =>{
            if(!root) {
                return level;
            }

            return Math.max(maxLevel(root.left, level+1), maxLevel(root.right, level+1));
        }
        return maxLevel(this.root, 0);
    }

    invertTree() {
        
        const invert = (root) => {
            if(!root) {
                return null;
            }

            const swap = (node) => {
                if(!node) {
                    return;
                }
                
                let temp = node.left;
                node.left = node.right;
                node.right = temp;

                swap(node.left);
                swap(node.right);
            }

            swap(root);
            return root;
        }

        return invert(this.root);
    }

    ceil(key) {
        let res = -1;
        let found = false;
        const traverse = (root) => {
            if(found) {
                return;
            }
            if(root) {
                traverse(root.left);
                if((root.value > key || root.value === key) && !found) {
                    found = true;
                    res = root.value;
                }
                traverse(root.right);
            }
        }
        traverse(this.root);
        return res;
    }

    floor(key) {
        let temp = this.root;
        let res = null;
        while(temp) {
            if(temp.value === key){
                break;
            }

            if(temp.value > key) {
                temp = temp.left;
            }else {
                temp = temp.right;
            }
            res = temp ? temp : res;
        }
        return res;
    }
}

const bst = new BST();
const arr = [10, 2, 5, 11, 6, 1];
arr.forEach(n => {
    bst.insert(n);
});
console.log(JSON.stringify(bst.root));
console.log(bst.search(10));
console.log(bst.search(5));
console.log(bst.search(3));
console.log(bst.search(2));
console.log(bst.search(11));
console.log('preOrder --- ', bst.preOrder());
console.log('InOrder --- ', bst.inOrder());
console.log('postOrder --- ', bst.postOrder());
console.log('levelOrder/BFS --- ',bst.levelOrder());
console.log(bst.min());
console.log(bst.max());
console.log(bst.depth());
console.log('ceil of 3 --- ',bst.ceil(3));
console.log('floor of 7 --- ',bst.floor(7));
console.log(JSON.stringify(bst.invertTree()));
