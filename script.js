// Function to load external HTML files into divs
function includeHTML() {
    document.getElementById("header").innerHTML = '<object type="text/html" data="header.html"></object>';
    document.getElementById("footer").innerHTML = '<object type="text/html" data="footer.html"></object>';
}

// Load the header and footer when the page loads
window.onload = includeHTML;
