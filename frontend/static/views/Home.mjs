import { fetchAndExtractBody } from '../js/utility.mjs';
import AbstractView from "./AbstractView.mjs";

export default class extends AbstractView {
    constructor() {
        super("Home");  
    }

    async getHtml() {
        
        return fetchAndExtractBody('/static/views/home.html');
    }

    
}
