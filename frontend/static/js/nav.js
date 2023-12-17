var boxElement = document.getElementById("box");
var content = document.getElementById("content");
var isOpen = false; //starts off as false!

  // Define the toggle function
  function toggle() {
    isOpen = !isOpen; //previous state
    
    //opens sidebar, turns button into an 'x'

    //open sideBar
    if (isOpen) {
        document.getElementById("mySideBar").style.width = "250px";
        document.getElementById("content").style.marginLeft = "250px";
        document.querySelector(".hamburger-box").style.marginLeft = "250px";
        document.querySelector(".bar.a").classList.toggle("rotated-in");
        document.querySelector(".bar.c").classList.toggle("rotated-out");
        document.querySelector(".bar.b").classList.toggle("hidden");
        
        
    //closes sidebar, turns button into hamburger lines
    //close sideBar
    } else if (!isOpen) {
        document.getElementById("mySideBar").style.width = "0";
        document.getElementById("content").style.marginLeft = "0px";
        document.querySelector(".hamburger-box").style.marginLeft = "0px";
        document.querySelector(".bar.a").classList.toggle("rotated-in");
        document.querySelector(".bar.c").classList.toggle("rotated-out");
        document.querySelector(".bar.b").classList.toggle("hidden");
  }
  
  }

  // Add an event listener to the box element
  boxElement.addEventListener("click", toggle);
  
//hi

  function closeSideBar() {
    if (isOpen) {
        document.querySelector(".bar.a").classList.toggle("rotated-in");
        document.querySelector(".bar.c").classList.toggle("rotated-out");
        document.querySelector(".bar.b").classList.toggle("hidden");
        document.getElementById("mySideBar").style.width = "0";
        document.getElementById("content").style.marginLeft = "0px";
        document.querySelector(".hamburger-box").style.marginLeft = "0px";
    }

    isOpen = false;
}

content.addEventListener("click", closeSideBar);






// ------------------------------------JS for home.html----------------------------------------- 

/*
need to grab all of the images under the ? element and put in arraylist
grab all elements with the 'stacked-image' class
start the pointer off at 0 each time page is reloaded
this method will be applied to both arrows so check what direction arrow head is pointing first
when the right arrow is clicked, move once in arraylist and set that element's visibility to true
when left is clicked, move back in arraylst and set that elemen't visibility to true
make sure the pointers will wrap around
*/
// var index = 0;
// var children = document.getElementsByClassName('stacked-image');

// function swipeLeft() {
//   children.item(index).style.visibility = 'hidden';
//   index--;
//   if (index < 0) {
//     index = children.length - 1;
//   }
//   children.item(index).style.visibility = 'visible';
// }

// function swipeRight() {
//   children.item(index).style.visibility = 'hidden';
//   index++;
//   if (index > children.length - 1) {
//     index = 0;
//   }
//   children.item(index).style.visibility = 'visible';
// }

// var spanner = document.getElementById('typed-element');
console.log(document.documentElement.outerHTML);
var leftButton = document.querySelectorAll('.left-button');
console.log(leftButton + "and" + leftButton.length);
var rightButton = document.querySelectorAll('.right-button');
console.log(rightButton + "and" + rightButton.length);

var photoIndex = [0, 0];

leftButton.forEach(function(element, index) {
  
  element.addEventListener('click', function swipeLeft(event) {
    //i want all of the images in this photo gallery
    //via the button's parent div's child img elements
    var images = event.target.parentNode.querySelectorAll('img'); //the parent div's images
    images[photoIndex[index]].style.visibility = 'hidden';
    photoIndex[index] = photoIndex[index] - 1;
    if (photoIndex[index] < 0) {
      photoIndex[index] = images.length - 1;
    }
    images[photoIndex[index]].style.visibility = 'visible';

  });
});

rightButton.forEach(function(element) {
  element.addEventListener('click', function swipeRight(event) {
    var images = event.target.parentNode.querySelectorAll('img'); //the parent div's images
    images[photoIndex[index]].style.visibility = 'hidden';
    photoIndex[index] = photoIndex[index] + 1;
    if (photoIndex[index] > images.length - 1) {
      photoIndex[index] = 0;
    }
    images[photoIndex[index]].style.visibility = 'visible';
  }) ;
});



  // Add an event listener for the 'click' event
  












  