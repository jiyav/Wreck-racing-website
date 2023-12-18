//browserify typer.js -o bundle.js

var Typed = require("typed.js");
var typed = new Typed("#typed-element", {
  strings: ["Welcome to Wreck Racing"],
  typeSpeed: 30,
  backSpeed: 20, //smaller values are faster 
  cursorChar: 'I',
  
  });

  
  console.log("typer.js is being run again biatch");


