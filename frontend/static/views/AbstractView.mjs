import { fetchAndExtractBody, fetchAndExtractScript } from '../js/utility.mjs';
export default class {

    constructor(title, htmlFile) {
        document.title = title;
        this.htmlFile = htmlFile;
        //document.scripts = htmlFile.scripts;
    }

    // setTitle(title) {
    //     document.title = title;
    // }

    async getHtml() {   
        return fetchAndExtractBody('/static/views/' + this.htmlFile);
    }

    async getScripts() {
        return "";
    }

    
}

