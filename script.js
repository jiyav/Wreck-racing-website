// Function to fetch and extract content from a given URL
async function fetchAndExtractBody(url) {
    try {
      const response = await fetch(url);
      const html = await response.text();
  
      // Create a new DOMParser
      const parser = new DOMParser();
  
      // Parse the HTML string into a DOM document
      const doc = parser.parseFromString(html, 'text/html');
  
      // Extract the entire body content
      const bodyContent = doc.querySelector('body').innerHTML;
  
      return bodyContent;
    } catch (error) {
      console.error('Error fetching or extracting content:', error);
      return null;
    }
  }
  

  // Fetch content and insert the entire body into the target div
async function loadBodyContentIntoDiv(source) {
    const url = source + '.html';  // Replace with the actual path to your HTML file
    // Fetch and extract entire body content
    const bodyContent = await fetchAndExtractBody(url);
  
    if (bodyContent) {
      // Insert the entire body content into the target div
      document.getElementById('page-content').innerHTML = bodyContent;
    }
  }
  

  