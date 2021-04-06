class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// here we are using push and shift fuctionality as enqueue and dequeue

class Queues {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.size) return undefined;
    const current = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = current.next;
    this.size--;
    return current.val;
  }
}

const test = new Stack();

test.enqueue("Lucifer");
test.enqueue("Amanedial");
test.enqueue("Cloe");
console.log(test.dequeue());
