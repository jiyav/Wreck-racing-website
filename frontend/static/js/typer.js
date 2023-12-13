//browserify typer.js -o bundle.js

var Typed = require("typed.js");
var typed = new Typed("#typed-element", {
  strings: ["Welcome to Wreck Racing", "Do you like cars?","Come join our team!"],
  typeSpeed: 25,
  backSpeed: 17, //smaller values are faster 
  loop: true,
  cursorChar: '|'
  });

  console.log("typer.js is being run again biatch");


