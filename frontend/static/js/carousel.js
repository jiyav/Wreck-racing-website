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
    carousel.classList.remove('next', 'prev');
    var itemList = document.querySelectorAll('.item');
    if (type === 'next') {
        list.prepend(itemList[itemList.length - 1]);
        carousel.classList.add('next');
    } else {
        list.appendChild(itemList[0]); //rotate by 1
        carousel.classList.add('prev');
    }

}



