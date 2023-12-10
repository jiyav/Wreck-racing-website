import { fetchAndExtractBody } from '../js/utility.mjs';
export default class {

    constructor(title, htmlFile) {
        document.title = title;
        this.htmlFile = htmlFile;
    }

    // setTitle(title) {
    //     document.title = title;
    // }

    async getHtml() {   
        return fetchAndExtractBody('/static/views/' + this.htmlFile);
    }

    
}

