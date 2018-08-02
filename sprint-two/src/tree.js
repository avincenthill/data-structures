var Tree = function(value) {
  var newTree = {};
  if (!value) {
    value = null;
  }
  newTree.value = value;
  //newTree.parent = null;

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
    let isFound = false;
    if (this.value === target) {
      isFound = isFound || true;
    } else {
      this.children.forEach(element => {
        element.contains(target);
      });
    }
    return isFound;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
