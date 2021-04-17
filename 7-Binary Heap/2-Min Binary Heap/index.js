class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    const values = this.values;
    let index = values.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (values[parentIndex] <= values[index]) return values;
      const temp = values[parentIndex];
      values[parentIndex] = values[index];
      values[index] = temp;

      index = parentIndex;
    }
  }

  insertMany(arr) {
    for (let value of arr) {
      this.insert(value);
    }
  }

  extractMax() {
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
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      let idx = leftIndex - index;

      if (values[leftIndex] > values[rightIndex]) idx = rightIndex - index;

      if (values[index] > values[idx]) {
        [values[index], values[idx]] = [values[idx], values[index]];
      } else {
        return values;
      }

      index = idx;
    }
  }
}

const heap = new MinBinaryHeap();

heap.insertMany([100, 34, 57, 45, 32, 150]);
heap.insertMany([41, 39, 33, 18, 27, 12, 55]);
// heap.insert(55);
// console.log(heap.extractMax());
heap.extractMax();

// heap.valu
console.log(heap.values);
