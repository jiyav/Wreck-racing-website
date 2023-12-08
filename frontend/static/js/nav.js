var boxElement = document.getElementById("box");


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