function next() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
    var string5th = document.querySelector('.item:nth-child(5)').style.cssText;
    var startIndex5th = string5th.indexOf('animation: ');
    if (startIndex5th ==! -1) {
        document.querySelector('.item:nth-child(5)').style.cssText = string5th.substring(0, startIndex5th);
    }

    var string6th = document.querySelector('.item:nth-child(6)').style.cssText;
    var startIndex6th = string6th.indexOf('animation: ');
    if (startIndex6th ==! -1) {
        document.querySelector('.item:nth-child(5)').style.cssText = string6th.substring(0, startIndex6th);
    }

    console.log(document.querySelector('.item:nth-child(5)').style.cssText);
    document.querySelector('.item:nth-child(5)').style.cssText += 'animation: swipeoutright 0.5s ease-in-out forwards;';
    console.log(document.querySelector('.item:nth-child(5)').style.cssText);
    document.querySelector('.item:nth-child(6)').style.cssText += 'animation: swipeinright 0.5s ease-in-out forwards;';

}

window.onload = next;
document.getElementById('next').onclick = next;
    

document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    // not creating a new element, reusing the item
    document.getElementById('slide').prepend(lists[lists.length - 1]);
    var string1th = document.querySelector('.item:nth-child(1)').style.cssText;
    var startIndex1th = string1th.indexOf('animation: ');
    if (startIndex1th ==! -1) {
        document.querySelector('.item:nth-child(1)').style.cssText = string1th.substring(0, startIndex1th);
    }

    var string6th = document.querySelector('.item:nth-child(6)').style.cssText;
    var startIndex6th = string6th.indexOf('animation: ');
    if (startIndex6th ==! -1) {
        document.querySelector('.item:nth-child(6)').style.cssText = string6th.substring(0, startIndex6th);
    }
    document.querySelector('.item:nth-child(1)').style.cssText += 'animation: swipeoutleft 0.5s ease-in-out forwards;';
    document.querySelector('.item:nth-child(6)').style.cssText += 'animation: swipeinleft 0.5s ease-in-out forwards;';
}
  