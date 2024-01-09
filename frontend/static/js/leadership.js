// browserify leadership.js -o leadershipbundle.js

var Typed = require("typed.js");
var front = document.getElementById('leadership');

var typed = new Typed("#typed-element", {
    strings: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
    typeSpeed: 20,
    loop: false,
    
  });

  front.addEventListener('mouseover', function() {
    console.log(front + "typer start");
    typed.start(); // Start the typing animation
  });

  
