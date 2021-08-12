
function copyToClipboard(element) {
    // [source] => https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
    if (window.clipboardData && window.clipboardData.setData) {
        return window.clipboardData.setData("text", properties.text);

    }
    else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = element;
        textarea.select();
        try {
            return document.execCommand("copy");  
        }
        catch (ex) {
            console.warn("Failed to copy to clipboard.", ex);
            return false;
        }
    }
}
