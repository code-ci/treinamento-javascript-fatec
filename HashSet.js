var arr = ["Cafe", "Leite", "Arroz", "Cafe"]
var setObj = {};

for (var x in arr) {
  if (!setObj.hasOwnProperty(arr[x])) {
    setObj[arr[x]] = true;
  }
}

arr = [];
for (var x in setObj) {
  arr.push(x);
}

console.log(arr);

================================================================================

function HashSet() {

    var set = {};

    this.add = function(key) {
        set[key] = true;
    };

    this.remove = function(key) {
        delete set[key];
    };

    this.clear = function() {
        set = {};
    };

    this.get = function() {
      var arr = [];

      for (var x in set) {
        arr.push(x);
      }

      return arr;
    }

    this.contains = function(key) {
        return set.hasOwnProperty(key);
    };

    this.isEmpty = function() {
        for (var x in set) {
          return false;
        }

        return true;
    };
};
