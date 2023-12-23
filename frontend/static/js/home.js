

console.log(document.documentElement.outerHTML);
var leftButton = document.querySelectorAll('.left-button');
console.log(leftButton + "and" + leftButton.length);
var rightButton = document.querySelectorAll('.right-button');
console.log(rightButton + "and" + rightButton.length);

var photoIndex = Array(leftButton.length).fill(0);

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
  




  var toggleTexts = Array.from(document.querySelectorAll('.dropdown'));

  console.log(toggleTexts);

  toggleTexts.forEach(function(element, index) {
    console.log(element);
    var ulChild = element.querySelector('ul');

    
      // element.addEventListener('mouseenter', function() {
      //   console.log("moustenter event and display is " + ulChild.style);
      //   if (ulChild.style.display === 'none') {
      //     console.log("display is none");
      //     element.style.transform = 'scale(1.3)';
      //   }
        
      // });
  
      // element.addEventListener('mouseleave', function() {
      //   if (ulChild.style.display === 'none') {
      //     element.style.transform = 'scale(1)';
      //   }
        
      // });

    
    
    
    element.addEventListener('click', function toggleText(event) {
      console.log(element);
      console.log("first child" + element.firstChild);
      console.log(element.querySelector('ul'));
      //var ulChild = element.querySelector('ul');
      // var ulParent = element.parentElement;
     // console.log("parent" + ulParent.style.fontFamily + "parent style" + ulParent.style.listStyleType);

     console.log(element.style);
      if (ulChild.style.display === 'block') {
        console.log("click style"+ulChild.style.display);
        ulChild.style.display = 'none';
        console.log("list style" + element.style.listStyleType);
        element.style.listStyleType = " >" ;
        console.log("list style" + element.style.listStyleType);
      } else {
        
        ulChild.style.display = 'block';
        
        //element.style.listStyleType = '\u2193';
        console.log(element.style);
        console.log("list style open" + element.style.listStyleType);
      }
  
    });
  });


var pantoneButtons = document.querySelectorAll('.pantone-button');
console.log(pantoneButtons + "pantoneButtons");


pantoneButtons.forEach(function(element, index) {
  
  element.addEventListener('click', function popupwindow() {
    //i want all of the images in this photo gallery
    //via the button's parent div's child img elements
    var popupOptions = 'width=600,height=400,top=100,left=100,status=0,location=0,menubar=0,toolbar=0,resizable=0,scrollbars=1';
    // Open the popup window
    window.open('popup.html', 'Popup Window', popupOptions);

  });
});



  
