import AbstractView from "./AbstractView.mjs";

export default class extends AbstractView {
    constructor() {
        super("Gallery", "gallery.html");
        
    }

    async getHtml() {
        return fetchAndExtractBody('gallery.html');
    }

}

