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

rightButton.forEach(function(element, index) {
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
  








