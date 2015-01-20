// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elements = document.getElementsByTagName('*');
  var result = [];
    
  for (var i=0, length=elements.length; i<length; i++) {
    if ((' ' + elements[i].className + ' ').indexOf(' ' + className + ' ') > -1 ) {
      result[result.length] = elements[i];
    }
  }
    
  return result;
};
