class Animal {
  constructor(type) {
    this.type = type;
  }
  showType() {
    console.log(`This belong to ${this.type} family`);
  }
}

class Catagory extends Animal {
  constructor(catagory, color, age, type) {
    super(type);
    this.catagory = catagory;
    this.color = color;
    this.age = age;
  }
  showSummary() {
    console.log(
      `this is ${this.catagory}, its color is ${this.color} and it is ${this.age} years old`
    );
  }
}

let cat = new Catagory("cat", "brown", 2, "mammals");

cat.showSummary();

let dog = new Catagory("dog", "black", 3, "mammals");

dog.showSummary();
