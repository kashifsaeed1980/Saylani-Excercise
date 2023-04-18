// 18. Write a js program to find highest frequency character in a string.

var getMax = function (str) {
  var max = 0,
    maxChar = "";
  str.split("").forEach(function (char) {
    if (str.split(char).length > max) {
      max = str.split(char).length;
      maxChar = char;
    }
  });
  return maxChar;
};

console.log(getMax("PandoraBox"));
