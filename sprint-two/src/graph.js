// Instantiate a new graph
var Graph = function() {
  this.vertices = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //O(1) time complexity
  this.vertices.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //O(n) time complexity
  return _.contains(this.vertices, node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //O(1) time complexity
  this.vertices.pop(node);
  this.edges.pop(this.edges.node);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //O(n) time complexity //TBD unsure
  return _.contains(this.edges[toNode], fromNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //O(1) time complexity
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //O(1) time complexity
  this.edges[fromNode].pop(toNode);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //O(n) time complexity
  this.vertices.forEach(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
