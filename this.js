const obj = {
  name: "Alex",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

obj.greet(); // hello alex as this is currently carries the obj reference

console.log(this); // {} as it reference the global object

function greet() {
  console.log(`Hello, ${this.name}`);
}

greet(); // hello, undefined as there is no reference for the object calling the function so this is undefined

const person = { name: "Taylor" }; // here we create an object has his own this reference

// greet.call(person, person.name); // hello Taylor as this is provided from the person object

const boundGreet = greet.bind(person);
boundGreet(); // hello Taylor as this is provided from the person object as bind create a new version of the of the function binded to the object referenced.
