/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
var isOpen = false; //starts off as false!
var isClicked = false;
var button = false;
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

function loadPage(page) {
    // Fetch the content of the selected page
    fetch(page + '.html')
      .then(response => response.text())
      .then(content => {
        // Update the content container with the loaded content
        document.getElementById('page-content').innerHTML = content;
      })
      .catch(error => {
        console.error('Error fetching page:', error);
      });
  }
/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */


/* same menu button used to open and close the menu
default state is closed with hamburger icon
when clicked, if in closed state, open menu and transform
icon to X

when clicked if in open state, close menu and revert to hamburger
will need to toggle between open and close states of the menu AND icon
need to keep track of state
*/