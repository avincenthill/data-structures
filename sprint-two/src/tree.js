var Tree = function(value) {
  var newTree = {};
  if (!value) {
    value = null;
  }
  newTree.value = value;
  newTree.isFound = false;
  newTree.parent = null;

  //share methods
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.removeFromParent = treeMethods.removeFromParent;

  newTree.children = [];
  return newTree;
};

var treeMethods = {
  //O(1) time complexity
  addChild: function(value) {
    newTree = Tree(value);
    this.children.push(newTree);
    newTree.parent = this;
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
  },

  removeFromParent: function(target) {
    //O(1) time complexity
    let selectedNode;
    debugger;
    let selectNode = function(target) {
      if (this.value === target) {
        return this;
      } else {
        if (this.children) {
          this.children.forEach(element => {
            return selectNode(target);
          });
        }
      }
    };

    selectedNode = selectNode(this);
    debugger;
    if (selectedNode.parent) {
      selectedNode.parent.children.pop(selectedNode);
    }
    selectedNode.parent = null;
    return selectedNode;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
