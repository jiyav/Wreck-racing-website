//import { fetchAndExtractScript } from '../js/utility.mjs';
import AbstractView from "./AbstractView.mjs";


export default class extends AbstractView {
    constructor() {
        super("Home", "home2.html");  
    }

    // async getHtml() {   
    //     return fetchAndExtractBody('/static/views/home.html');
    // }

    async getScripts() {
        var str = ["/static/js/bundle.js", "/static/js/home2.js"];
        console.log("hello ru working?" + str);
        return str;
    }

    
}
