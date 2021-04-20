class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) return "Alredy Exist";
    this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined;
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined;

    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;

    for (let val of this.adjacencyList[vertex]) {
      this.removeEdge(val, vertex);
    }

    delete this.adjacencyList[vertex];
  }

  DFSR(vertex) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(vertex);

    return result;
  }

  DFSI(vertex) {
    const stack = [vertex];
    const result = [];
    const visited = {};

    visited[vertex] = true;

    while (stack.length) {
      const currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  BFS(vertex) {
    const queue = [vertex];
    const result = [];
    const visited = {};
    visited[vertex] = true;
    while (queue.length) {
      const currentVertex = queue.shift();

      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

const graph = new Graph();

graph.addVertex("Mumbai");
graph.addVertex("California");
graph.addVertex("Tokyo");
graph.addVertex("Los Angeles");

graph.addEdge("Mumbai", "Tokyo");
graph.addEdge("Mumbai", "California");
graph.addEdge("Mumbai", "Los Angeles");
graph.addEdge("Tokyo", "California");
graph.addEdge("Tokyo", "Los Angeles");
graph.addEdge("California", "Los Angeles");

// graph.removeEdge("Tokyo", "California");
// graph.removeEdge("Mumbai", "California");

// graph.removeVertex("Tokyo");

console.log(graph);
console.log(graph.DFSR("Mumbai"));
console.log(graph.DFSI("Mumbai"));
console.log(graph.BFS("Mumbai"));

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.BFS("A"));
