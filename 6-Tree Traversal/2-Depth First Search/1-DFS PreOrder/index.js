class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) return (this.root = newNode);
    else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  find(value) {
    if (!this.root) return undefined;
    else {
      let current = this.root;

      let toggle = false;
      while (true) {
        if (value === current.value) return current;
        if (value < current.value) {
          if (!current.left) {
            toggle = true;
          }

          current = current.left;
        } else {
          if (!current.right) {
            toggle = true;
          }
          current = current.right;
        }
        if (toggle) return false;
      }
    }
  }

  insertMany(arr) {
    for (let val of arr) {
      this.insert(val);
    }
    return this;
  }

  BFS() {
    const queue = [],
      data = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    const data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

const tree = new BinarySearchTree();

// tree.insert(10);
// tree.insert(12);
// tree.insert(2);
// tree.insert(1);
// tree.insert(0);
// tree.insert(6);
// tree.insert(7);
// tree.insert(25);
tree.insertMany([10, 23, 434, 1, 9, 5, 33, 4, 0, 3, 9, 67]);
console.log(tree.insert(91));
