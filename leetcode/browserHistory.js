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
    }

    // insert after tail
    addNode(value) {
        const node = new Node(value);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        }else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        return this;
    }
}

/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.list = new DLL();
    this.list.addNode(homepage);
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.list.addNode(url);
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    let temp = this.list.tail;
    while(temp.prev !== null && steps-- !== 0) {
        temp = temp.prev;
    }
    this.list.tail = temp;
    return this.list.tail;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    let temp = this.list.tail;
    while(temp.next !== null && steps-- !== 0) {
        temp = temp.next;
    }
    this.list.tail = temp;
    return this.list.tail;
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
let browserHistory = new BrowserHistory("leetcode.com");
console.log(browserHistory.visit("google.com"));
console.log(browserHistory.visit("facebook.com"));
console.log(browserHistory.visit("youtube.com"));
console.log(browserHistory.back(1).value);
console.log(browserHistory.back(1).value);
console.log(browserHistory.forward(1).value);
console.log(browserHistory.visit("linkedin.com"));
console.log(browserHistory.forward(2).value);
console.log(browserHistory.back(2).value);
console.log(browserHistory.back(7).value);
