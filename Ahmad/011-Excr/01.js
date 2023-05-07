// 1. Write a JavaScript program to list the properties of a JavaScript object

var student = {
  name: "David Rayy",

  sclass: "VI",

  rollno: 12,
};
function _keys(obj) {
  if (!isObject(obj)) return [];
  if (Object.keys) return Object.keys(obj);
  var keys = [];
  for (var key in obj) if (_.has(obj, key)) keys.push(key);
  return keys;
}
function isObject(obj) {
  var type = typeof obj;
  return type === "function" || (type === "object" && !!obj);
}
console.log(_keys(student));
