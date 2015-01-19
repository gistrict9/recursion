// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	if(obj === null) return "null";
  if(typeof(obj) === "function" || typeof(obj) === "undefined") return null;
  if(typeof(obj) === "number" || typeof(obj) === "boolean") return String(obj);
  if(typeof(obj) === "string") return '"' + obj + '"';

  // Array
  if(Array.isArray(obj)) {
    var result = [];
    for (var i=0, length=obj.length; i<length; i++){
      result.push(stringifyJSON(obj[i]));
    }
    return "[" + result.join(",") + "]";
  }

  // Object
  if(typeof(obj) === "object") {
  	var result = [];
  	var keys = Object.keys(obj);
  	for (var i=0, length=keys.length; i<length; i++) {
  		var value = stringifyJSON(obj[keys[i]]);
  		if(value !== null) {
  			result.push('"' + keys[i] + '":' + value);
  		}
  	}
  	return "{" + result.join(",") + "}";
  }
};
