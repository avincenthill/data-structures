var Tree = function(value) {
  var newTree = {};
  if (!value) {
    value = null;
  }
  newTree.value = value;
  newTree.isFound = false;

  //share methods
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  newTree.children = [];
  return newTree;
};

var treeMethods = {
  //O(1) time complexity
  addChild: function(value) {
    newTree = Tree(value);
    this.children.push(newTree);
    //newTree.parent = this;
  },

  contains: function(target) {
    //O(n) time complexity
    if (this.value === target) {
      this.isFound = this.isFound || true;
    } else {
      this.children.forEach(element => {
        this.isFound = this.isFound || element.contains(target);
      });
    }
    return this.isFound;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
