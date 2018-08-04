var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.left = function() {
  //O(1) time complexity
  if (this && this.left) {
    return this.left;
  }
};

BinarySearchTree.prototype.right = function() {
  //O(1) time complexity
  if (this && this.right) {
    return this.right;
  }
};

BinarySearchTree.prototype.insert = function(value) {
  //O(log(n)) time complexity
  let newNode = new BinarySearchTree(value);
  let recursiveInsert = function(node, newNode) {
    //recurse on left
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        recursiveInsert(node.left, newNode);
      }
    }
    //recurse on right
    if (newNode.value > node.value) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        recursiveInsert(node.right, newNode);
      }
    }
  };
  recursiveInsert(this, newNode);
};

BinarySearchTree.prototype.contains = function(value) {
  //O(log(n)) time complexity
  let recursiveSearch = function(node, value) {
    if (!node) {
      return false;
    }
    //recurse on left
    if (value === node.value) {
      return true;
    } else if (value < node.value) {
      return recursiveSearch(node.left, value);
      //recurse on right
    } else if (value > node.value) {
      return recursiveSearch(node.right, value);
    }
  };
  return recursiveSearch(this, value);
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  //O(n) time complexity
  let recursiveCall = function(node, cb) {
    if (!node) {
      //do nothing
    } else {
      cb(node.value);
      if (node.left) {
        recursiveCall(node.left, cb);
      }
      if (node.right) {
        recursiveCall(node.right, cb);
      }
    }
  };
  recursiveCall(this, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
