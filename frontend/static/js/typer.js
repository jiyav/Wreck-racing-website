//browserify typer.js -o bundle.js
// var beginType = document.querySelectorAll('.beginType');
// var Typed = require("typed.js");

// beginType.forEach(function(element, index) {
//   element.addEventListener('hover', function beginType(event) {
//     //i want all of the images in this photo gallery
//     //via the button's parent div's child img elements
//     var typed = new Typed('#' + event.target.id, {
//       strings: ["Welcome to Wreck Racing"],
//       typeSpeed: 30,
//       backSpeed: 20, //smaller values are faster 
//       cursorChar: 'I',
//       });
//     });
//   });

var Typed = require("typed.js");
var typed = new Typed("#typed-element", {
  strings: ["Welcome to Wreck Racing"],
  typeSpeed: 30,
  backSpeed: 20, //smaller values are faster 
  cursorChar: 'I',
  
  });

  
  console.log("typer.js is being run again biatch");


