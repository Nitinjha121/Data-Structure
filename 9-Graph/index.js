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

graph.removeEdge("Tokyo", "California");
graph.removeEdge("Mumbai", "California");

// graph.removeVertex("Tokyo");
// graph.removeVertex("Mumbai");

console.log(graph);

// console.log(graph.addEdge("Mumbai", "Cali"));
// console.log(graph.removeEdge("Mumbai", "LA"));
