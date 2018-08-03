var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //O(1) time complexity
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  //O(1) time complexity
  return this._storage[item] ? true : false;
};

setPrototype.remove = function(item) {
  //O(1) time complexity
  this._storage[item] = null;
};

//TBD: I'm not sure whether "key": key object is the best structure here compared to an array

/*
 * Complexity: What is the time complexity of the above functions?
 */
