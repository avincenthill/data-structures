var HashTable = function() {
  this._limit = 100;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //O(1) time complexity (average) O(n) (worst)
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index) || [];
  let tuple = [k, v];
  bucket.push(tuple);
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  //O(1) time complexity (average) O(n) (worst)
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  let value;
  _.forEach(bucket, element => {
    if (element[0] === k) {
      value = element[1];
    }
  });
  return value;
};

HashTable.prototype.remove = function(k) {
  //O(1) time complexity (average) O(n) (worst)
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  return _.forEach(bucket, element => {
    if (element[0] === k) {
      return bucket.pop(element);
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
