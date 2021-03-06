var DLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.node = function(value) {
    var node = {};
    node.value = value;
    node.next = null;
    node.previous = null;
    return node;
  };

  list.addToTail = function(value) {
    //O(1) time complexity
    //create new node
    let newNode = list.node(value);

    //make tail point to it
    if (list.tail) {
      list.tail.next = newNode;
      newNode.previous = list.tail;
    }

    //update head
    if (!list.head) {
      list.head = newNode;
    }

    //update tail
    list.tail = newNode;
  };

  list.removeHead = function() {
    //O(1) time complexity
    let formerHeadValue = list.head.value;
    if (list.head.next) {
      list.head = list.head.next;
    } else {
      list.head = null;
    }
    return formerHeadValue;
  };

  list.addToHead = function(value) {
    //O(1) time complexity
    //create new node
    let newNode = list.node(value);
    //make tail point to it
    if (list.head) {
      list.head.previous = newNode;
      newNode.next = list.head;
    }
    //update head
    list.head = newNode;
  };

  list.removeTail = function() {
    //O(1) time complexity
    let formerTailValue = list.tail.value;
    if (list.tail.previous) {
      list.tail = list.tail.previous;
    } else {
      list.tail = null;
    }
    return formerTailValue;
  };

  list.contains = function(target) {
    //O(n) time complexity
    let testNode = node => {
      if (node === null || node.value === null) {
        return false;
      } else if (node.value === target) {
        return true;
      } else {
        return testNode(node.next);
      }
    };
    return testNode(list.head);
  };

  return list;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
