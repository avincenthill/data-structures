var HashTable = function() {
  this._limit = 100;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //O(1) time complexity
  var index = getIndexBelowMaxForKey(k, this._limit);

  //if something is in index location of table
  //and it comes from a different k
  //what does this mean?

  if (this._storage.get(index)) {
    console.log(this._storage.get(index));
  }

  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  //O(n) time complexity
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  //O(1) time complexity
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};

//getIndexBelowMaxForKey = function(str, max)

/*

Make the following properties appear on all instances:
An .insert() method
A .retrieve() method
A .remove() method

  */

/*
 * Complexity: What is the time complexity of the above functions?
 */
