var carousel = document.querySelector('.carousel');
var list = document.querySelector('.carousel .list');

var leftButton = document.querySelector('.carousel .buttons .left');
var rightButton = document.querySelector('.carousel .buttons .right');


leftButton.onclick = function() {
    showSlider('prev');
}

rightButton.onclick = function() {
    showSlider('next');
}

function showSlider(type) {
    carousel.classList.remove('next', 'prev', 'seemore', 'goback');
    var itemList = document.querySelectorAll('.item'); 
    if (type === 'next') {
        list.prepend(itemList[itemList.length - 1]);
        carousel.classList.add('next');
    } else {
        list.appendChild(itemList[0]); //rotate by 1
        carousel.classList.add('prev');
    }
}

//see more/go back functionality
var intro = document.querySelectorAll('.intro')
var seemore = document.querySelectorAll('.intro button');
var goback = document.querySelectorAll('.seemore button');


seemore.forEach(function(element) {
    element.addEventListener('click', function seemore() {
        console.log("seemore");
        carousel.classList.remove('goback');
        carousel.classList.add('seemore');
    });
  });

goback.forEach(function(element) {
element.addEventListener('click', function goback() {
    console.log("goback");
    carousel.classList.remove('seemore');
    carousel.classList.add('goback');
});
});






