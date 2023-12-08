import Home from "../views/Home.mjs";
import Projects from "../views/Projects.mjs";
import Leadership from "../views/Leadership.mjs";
import Gallery from "../views/Gallery.mjs";
import Contact from "../views/Contact.mjs";

//const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");
function pathToRegex(path) {
    return new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");
}




//original
const getParams0 = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    //define a callback function inside the map method
    //Object.fromEntries converts array with subarray holding key values key-value pair objects
    return Object.fromEntries(keys.map((element, index) => {
        //replace each element of original array w this RETURNED altered value
        //map(array element, index, entire array)
        //replace array element with an array that contains two values, a 2-d array
        //basically creates a key-value pair array
        return [element, values[index]];
    }));
};

//equivalent function
function getParams(match) {
    //match array's result param (also an array)'s array copy starting from first element
    const values = match.result.slice(1); //match.result.
    //Array.from converts iterable into proper array
    //this array is then mapped and returned to keys
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(function(element) {
        return element[1]; //assuming each element is also an array, retrieves the index 1 of each
    })

    function func() {
        return keys.map(function(element, index) {
            return [element, values[i]];
        })
    }

    const arr = Object.fromEntries(func());
    return arr;

}



//original
const navigateTo0 = url => {
    history.pushState(null, null, url);
    router();
};

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
        { path: "/", view: Home },
        { path: "/Projects", view: Projects },
        { path: "/Leadership", view: Leadership }, 
        { path: "/Gallery", view: Gallery }, 
        { path: "/Contact", view: Contact }
    ];

    //converts each object element of routes to an object with an additional property called result, which is a boolean
    const potentialMatches = routes.map(function(route) {
        return {
            //{route, yes this is a route, or not this isn't a route}
            route: route,
            //u can change browser url to whatever u want, result will store if its a valid path or not
            //The match method is used to check if the current path matches the regular expression generated from the route path.
            //The result of location.pathname.match(pathToRegex(route.path)) will be an array if there is a match, and null if there is no match. 
            //The array contains information about the match, 
            //including the full match and any captured groups specified in the regular expression
            result: location.pathname.match(pathToRegex(route.path))
            //This property specifically returns the path component of the URL, starting from the root of the domain. 
            //For example, if the URL is "https://www.example.com/path/to/page", location.pathname would be "/path/to/page".
        };
    });

    ////.find() method is an array method used to locate and retrieve the first element 
    //in an array that satisfies a specified condition. 
    let match = potentialMatches.find(function(element) {
        //callback function defines the condition to search for
        return element.result !== null
    });
    //basically match holds a viable path

    //if match is false/undefined, then set it to home 
    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));
    document.querySelector("#app").innerHTML = await view.getHtml();


}


//original
const router0 = async () => {
    const routes = [
        { path: "/", view: Home },
        { path: "/Projects", view: Projects },
        { path: "/Leadership", view: Leadership }, 
        { path: "/Gallery", view: Gallery }, 
        { path: "/Contact", view: Contact }
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    
    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
