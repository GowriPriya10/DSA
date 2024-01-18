// https://leetcode.com/problems/lru-cache/

/**
 * 
 * 1. Maintain map for quick access, key is key and value is Node containing key, value, prev and next
 * 2. Maintain a DLL for which the head.next will give us the LRU and tail.prev will give us the MRU
 * 3. For every put of cache data, 
 *      (a) Remove data from map & dll if already present
 *      (b) Create new node and add it to map, dll[just before tail]
 *      (c) Check if len is exceeding the capacity, if yes remove the lru node from map and dll
 * 4. For every get of cache key,
 *      (a) If present in map, update the mru i.e remove the node from list and insert again.
 *      (b) Else return -1
 *
 */

class Node {
    constructor(k, v) {
        this.key = k;
        this.val = v;
        this.prev = null;
        this.next = null;
    }
}

let LRUCache = function(capacity) {
    this.size = capacity;
    this.map = new Map();
    
    this.lru = new Node(0,0);
    this.mru = new Node(0,0);
    this.lru.next = this.mru;
    this.mru.prev = this.lru;
};

LRUCache.prototype.get = function(key) {
    if(this.map.has(key)){
        let res = this.map.get(key);
        this.remove(res);
        this.insert(res);
        return res.val;
    }
    return -1;
};

LRUCache.prototype.put = function(key, value) {
    if(this.map.has(key)){
        this.remove(this.map.get(key));
    }
    this.map.set(key, new Node(key, value));
    this.insert(this.map.get(key));

    if(this.map.size > this.size){
        let lruNode = this.lru.next;
        this.remove(lruNode);
        this.map.delete(lruNode.key);
    }
    return null;
};

// insert before mru/tail
LRUCache.prototype.insert = function (node) {
    let prev = this.mru.prev;
    let next = this.mru;
    prev.next = next.prev = node;
    node.next = next;
    node.prev = prev;
}

// remove after lru/head
LRUCache.prototype.remove = function (node) {
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
}

let cache = new LRUCache(3);
console.log(cache.put(1,2));
console.log(cache.put(2,2));
console.log(cache.get(2));
console.log(cache.get(3));
console.log(cache.put(3,3));
console.log(cache.put(4,4));
console.log(cache.get(1));
console.log(cache.get(2));
console.log(cache.get(3));
console.log(cache.get(4));
console.log(cache.put(1,2));
console.log(cache.get(1));
console.log(cache.get(2));
