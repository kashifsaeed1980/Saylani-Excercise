/* 10. Write a JavaScript program to sort an array of JavaScript objects.

Sample Object :



var library = [

   {

       title:  'The Road Ahead',

       author: 'Bill Gates',

       libraryID: 1254

   },

   {

       title: 'Walter Isaacson',

       author: 'Steve Jobs',

       libraryID: 4264

   },

   {

       title: 'Mockingjay: The Final Book of The Hunger Games',

       author: 'Suzanne Collins',

       libraryID: 3245

   }];

Expected Output:



[[object Object] {

  author: "Walter Isaacson",

  libraryID: 4264,

  title: "Steve Jobs"

}, [object Object] {

  author: "Suzanne Collins",

  libraryID: 3245,

  title: "Mockingjay: The Final Book of The Hunger Games"

}, [object Object] {

  author: "The Road Ahead",

  libraryID: 1254,

  title: "Bill Gates"

}] */

var library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    libraryID: 1254,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

var sort_by = function (field_name, reverse, initial) {
  var key = initial
    ? function (x) {
        return initial(x[field_name]);
      }
    : function (x) {
        return x[field_name];
      };

  reverse = !reverse ? 1 : -1;

  return function (x, y) {
    return (x = key(x)), (y = key(y)), reverse * ((x > y) - (y > x));
  };
};

var newobj = library.sort(sort_by("libraryID", true, parseInt));

console.log(newobj);
