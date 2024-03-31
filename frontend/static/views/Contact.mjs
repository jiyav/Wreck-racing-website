import AbstractView from "./AbstractView.mjs";

export default class extends AbstractView {
    constructor() {
        super("Contact", "contact.html");
    }

    async getScripts() {
        var str = ["/static/js/bundle.js"];
        console.log("hello ru working?" + str);
        return str;
    }

    // async getHtml() {
    //     return `
    //         <h1>Contact</h1>
    //         <p>
    //             Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
    //         </p>
            
    //     `;
    // }
}