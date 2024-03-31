import AbstractView from "./AbstractView.mjs";

export default class extends AbstractView {
    constructor() {
        super("Projects", "carousel.html");
        
    }

    // async getHtml() {
    //     return `
    //         <h1>Welcome back, Dom</h1>
    //         <p>
    //             Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
    //         </p>
            
    //     `;
    // }

    async getScripts() {
        var str = ["/static/js/bundle.js", "/static/js/carousel.js"];
        console.log("hello ru working?" + str);
        return str;
    }

}