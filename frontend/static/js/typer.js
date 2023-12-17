//browserify typer.js -o bundle.js

var Typed = require("typed.js");
var typed = new Typed("#typed-element", {
  strings: ["Welcome to Wreck Racing!", "Scroll to learn more"],
  typeSpeed: 30,
  backSpeed: 20, //smaller values are faster 
  loop: true,
  cursorChar: 'I',
  
  });

  
  console.log("typer.js is being run again biatch");


