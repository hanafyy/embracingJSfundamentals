function exampleFunction() {
  let functionScoped = "I'm only accessible within this function.";
  console.log(functionScoped); // Output: I'm only accessible within this function.
}

exampleFunction();
console.log(functionScoped); // Error: functionScoped is not defined

{
  let blockScoped = "I'm block-scoped!";
  var notBlockScoped = "I'm not block-scoped!";
  console.log(blockScoped); // Output: I'm block-scoped!
}
console.log(notBlockScoped); // Output: I'm not block-scoped!
console.log(blockScoped); // Error: blockScoped is not defined
