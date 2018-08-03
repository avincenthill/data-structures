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
  //O(logn) time complexity
  let newNode = new BinarySearchTree(value);
  //recurse on left and right trees
  let recursiveInsert = function(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        recursiveInsert(node.left, newNode);
      }
    }
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
  //O(logn) time complexity
  
  let recursiveSearch = function(node, value) {
    if (!node || !node.value) {
      return false;
    }
    //recurse on left
    if (value < node.value) {
      if (node.left.value === value) {
        return true;
      } else {
        recursiveSearch(node.left, value);
      }
    //recurse on right
    } else if (value > node.value) {
      if (node.right.value === value) {
        return true;
      } else {
        recursiveSearch(node.right, value);
      }
    } else if (value === node.value) {
      return true;
    }
  };
  return recursiveSearch(this, value);
};

BinarySearchTree.prototype.depthFirstLog = cb => {
  //O(n) time complexity
  //TBD
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
