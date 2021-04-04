class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) (this.head = newNode), (this.tail = newNode);
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let prev = current;

    while (current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    this.tail.next = null;

    this.length--;
    if (!this.length) (this.head = null), (this.tail = null);
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    const current = this.head;
    this.head = this.head.next;
    this.length--;
    if (!this.length) this.tail = null;
    return current;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) (this.head = newNode), (this.tail = this.head);
    else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) return null;
    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (!foundNode) return false;
    foundNode.val = val;
    return true;
  }

  insert(index, val) {
    if (index > this.length || index < 0) return false;

    if (index === this.length) {
      this.push(val);
      return true;
    }
    if (index === 0) return !!this.unshift(val);
    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const temp = prev.next;

    newNode.next = temp;
    prev.next = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index >= this.length || index < 0) return false;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const previousNode = this.get(index - 1);
    const removed = previousNode.next;
    previousNode.next = removed.next;

    this.length--;
    return true;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
    // return arr;
  }
}

let list = new SinglyLinkedList();

list.push("Hello");
list.push("GOODEBYE");
list.push("Go");
list.unshift("yaa");
// list.unshift("got this one to");

// list.get(2);
// console.log(list.set(10, "!"));
// console.log(list.insert(2, "check"));
// console.log(list.remove(2));
// console.log(list);
console.log(list.print());
console.log(list.reverse());
