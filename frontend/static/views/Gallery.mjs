import AbstractView from "./AbstractView.mjs";

export default class extends AbstractView {
    constructor() {
        super("Gallery");
        
    }

    async getHtml() {
        return fetchAndExtractBody('gallery.html');
    }

}

