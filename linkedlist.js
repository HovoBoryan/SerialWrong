class Node {
    constructor(data) {
    this.data = data;
    this.next = null;
    }
}
class LinkedList {
    constructor() {
    this.head = null;
    this.tail = null;
    }
    append(data) {
    const newNode = new Node(data);
    if (!this.head) {
        this.head = newNode;
        return;
    }
    if (data < this.head.data) {
        newNode.next = this.head;
        this.head = newNode;
        return;
    }
    let current = this.head;
    while (current.next && data > current.next.data) {
        current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    }
    getMax() {
    if (!this.head) {
        return null;
    }
    let current = this.head;
    let max = this.head.data;
    while (current) {
        if (current.data > max) {
        max = current.data;
        }
        current = current.next;
    }
    return max;
    }
    getMin() {
    if (!this.head) {
        return null;
    }
    let current = this.head;
    let min = this.head.data;
    while (current) {
        if (current.data < min) {
        min = current.data;
        }
        current = current.next;
    }
    return min;
    }
    delete(data) {
    if (!this.head) {
        return;
    }
    if (this.head.data === data) {
        this.head = this.head.next;
        return;
    }
    let current = this.head;
    while (current.next && current.next.data !== data) {
        current = current.next;
    }
    if (current.next && current.next.data === data) {
        current.next = current.next.next;
    }
    }
    toArray() {
    const array = [];
    let current = this.head;
    while (current !== null) {
        array.push(current.data);
        current = current.next;
    }
    return array;
}
}
module.exports = LinkedList;
