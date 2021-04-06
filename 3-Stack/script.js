class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// in this we use shift and unshift but the name we choose is push and pop because in linked list push and pop don't have same time complexity.

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const current = this.first;
      this.first = newNode;
      this.first.next = current;
    }
    return ++this.size;
  }

  pop() {
    if (!this.size) return undefined;
    const current = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = current.next;
      current.next = null;
    }
    this.size--;
    return current.val;
  }
}

const test = new Stack();

test.push("Lucifer");
test.push("Amanedial");
test.push("Cloe");
console.log(test.pop());
