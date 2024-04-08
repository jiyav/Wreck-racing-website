import Home from "../views/Home.mjs";
import Projects from "../views/Projects.mjs";
import Leadership from "../views/Leadership.mjs";
import Gallery from "../views/Gallery.mjs";
import Contact from "../views/Contact.mjs";

function navigateTo(url) {
    //history API, history.pushState(state, title, url). basically adds a new entry to browsers history
    //changes the URL displayed in the browser's address bar without triggering a full page reload.
    //If you want to respond to changes in the URL, you might need to handle the popstate event
    history.pushState(null, null, url);
    router();
}

async function router() {
    //routes is an array of objects
    const routes = [
        // Home, About, Join, Team, Shop
        { path: "/Home", view: Home },
        { path: "/Cars", view: Projects },
        { path: "/Team", view: Leadership }, 
    ];

    //array of route + null marker object
    const potentialMatches = routes.map(function(route) {
        //returns new object with an extra paramter that contains a null marker for each route object in routes
        return {
            route: route,
            //null if the current path in the browser does not match the corresponding path of the route object
            result: location.pathname.match(route.path)
        };
    });

    //match holds the first element from potentialMatches whose 'result' field is non-null, meaning
    //the current browser path matches with one of the predefined paths in 'routes'
    let match = potentialMatches.find(function(element) { //find() takes a callback function and 
        //is iterated over each element until the first non-null element is found, and returns that
        //to the match variable
        return element.result !== null
    });
    
    //if match is false/undefined, meaning no pre-defined path in 'route' matches the current browser path
    //sets match to a default path aka home
    if (!match) {
        console.log("hi");
        match = {
            route: routes[0],
            result: routes[0].path //change path to home
        };
        console.log(match.route.view);
    }

    //route has a 'view' property. invokes the view() constructor aka creating a new view object
    //element returned from getParams(match) is paramter for view constructor
    //where did we defined view constructor? default object constructor?
    const view = new match.route.view();
    //console.log(view.getHtml());
    document.querySelector("#app").innerHTML = await view.getHtml();
    var scripts = await view.getScripts();
    scripts.forEach(function(scriptSource, index) {
        var script = document.createElement('script');
        script.src = scriptSource; 
        document.body.appendChild(script);
    });
    
  
    console.log("the html now bitch" + document.body.innerHTML);


}



window.addEventListener("popstate", router);





document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            //e.preventDefault(); page MUST be reloaded for typer.js to fire each time :/
            //blanket fix for now. will figure out how to make typer.js work for SPA framework
            navigateTo(e.target.href);
        }
    });

    router();
});

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
