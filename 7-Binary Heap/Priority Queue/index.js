class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    const values = this.values;
    let index = values.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (values[parentIndex].priority <= values[index].priority) return values;
      const temp = values[parentIndex];
      values[parentIndex] = values[index];
      values[index] = temp;

      index = parentIndex;
    }
  }

  enqueueMany(arr) {
    for (let [value, priority] of arr) {
      this.enqueue(value, priority);
    }
  }

  dequeue() {
    const values = this.values;

    const temp = values[0];
    values[0] = values[values.length - 1];
    values[values.length - 1] = temp;
    values.pop();
    this.bubbleDown();
    return temp;
  }

  bubbleDown() {
    const values = this.values;

    let index = 0;
    while (true) {
      const leftIndex = Math.floor(2 * index + 1);
      const rightIndex = Math.floor(2 * index + 2);
      let idx = leftIndex;

      if (values[leftIndex]?.priority > values[rightIndex]?.priority)
        idx = rightIndex;

      if (values[index]?.priority > values[idx]?.priority) {
        [values[index], values[idx]] = [values[idx], values[index]];
      } else {
        return values;
      }

      index = idx;
    }
  }
}

const priorityQ = new PriorityQueue();

// priorityQ.enqueueMany([100, 34, 57, 45, 32, 150]);
priorityQ.enqueueMany([
  [41, 2],
  [39, 3],
  [33, 1],
  [18, 2],
  [27, 7],
  [12, 0],
  [55, 9],
]);
// priorityQ.enqueue(55);
// console.log(priorityQ.dequeue());
priorityQ.dequeue();
// priorityQ.dequeue();
// priorityQ.dequeue();
// priorityQ.dequeue();
// priorityQ.dequeue();
// priorityQ.dequeue();
// priorityQ.dequeue();

// priorityQ.valu
console.log(priorityQ.values);
