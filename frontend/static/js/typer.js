//browserify typer.js -o bundle.js

var Typed = require("typed.js");
var typed = new Typed("#typed-element", {
  strings: ["Do you like cars?","Join Wreck Racing!"],
  typeSpeed: 25,
  backSpeed: 17, //smaller values are faster 
  loop: true,
  cursorChar: 'I'
  });

  
  console.log("typer.js is being run again biatch");


