//can't use fetch API bc this is requesting the server for info. we just need to 
//access files from our own local folders
export async function fetchAndExtractBody(url) {
    try {
        //can't use fetch API bc this is requesting the server for info. we just need to 
        //access files from our own local folders
        console.log("The url" + url);
        const response = await fetch(url);
        const htmlText = await response.text();
        
        // Use DOMParser to parse the HTML text
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(htmlText, 'text/html');
        //console.log(htmlDocument);
        // Extract body content
        const bodyContent = htmlDocument.body.innerHTML;
        //console.log(bodyContent);
        //console.log(bodyContent);

        // Display the body content
        return bodyContent;
    } catch (error) {
        console.error('Error fetching or parsing HTML:', error);
    }
}

export async function fetchAndExtractScript(url) {
    try {
        //can't use fetch API bc this is requesting the server for info. we just need to 
        //access files from our own local folders
        console.log("The url" + url);
        const response = await fetch(url);
        const htmlText = await response.text();
        
        // Use DOMParser to parse the HTML text
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(htmlText, 'text/html');
        //console.log(htmlDocument.body);
        // Extract body content
        const scripts = htmlDocument.body.getElementsByTagName('script');

        //console.log(htmlDocument.scripts);
        //console.log("here are the scripts" + scripts + "and the lengfth" + scripts.length);
        var scriptString=[];
        for (let i = 0; i < scripts.length; i++) {
            scriptString[i] = scripts[i].innerHTML;
        }

        console.log(scriptString);

        // Display the body content
        return scriptString;
    } catch (error) {
        console.error('Error fetching or parsing HTML:', error);
    }
}
