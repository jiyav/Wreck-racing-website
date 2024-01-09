var imgArr = ['../images/2010comp.JPG','../images/2013comp.JPG', '../images/2018comp.JPG',
    '../images/2010comp.JPG','../images/2013comp.JPG', '../images/2018comp.JPG',
    '../images/2010comp.JPG','../images/2013comp.JPG', '../images/2018comp.JPG',
    '../images/2010comp.JPG','../images/2013comp.JPG', '../images/2018comp.JPG'];
var centerGridImage = document.querySelector('.center-grid-image');
var imageGrids = document.querySelectorAll('.has-img');
imageGrids.forEach(function(element, index) {
    element.addEventListener('mouseover', function unveil() {
        centerGridImage.classList.remove("blur-animation");
        console.log(index);
        centerGridImage.src = imgArr[index];
        centerGridImage.classList.add("blur-animation");
        
    });
  });