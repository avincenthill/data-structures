var Tree = function(value) {
  var newTree = {};
  if (!value) {
    value = null;
  }
  newTree.value = value;

  //share methods
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  newTree.children = {};
  return newTree;
};

var treeMethods = {
  addChild: function(value) {
    this.children[Object.keys(this.children).length] = Tree(value);
  },

  contains: function(target) {
    //O(TBD) time complexity
    //TBD: fix this
    if (!this) {
      return false;
    } else if (this.value === target) {
      return true;
    } else if (this.children === {}) {
      return false;
    } else {
      console.log(this.children[0]);
      return this.children[0].contains(target);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
