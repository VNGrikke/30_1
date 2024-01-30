function render() {
    var outputElement = document.getElementById('output');
    outputElement.innerHTML = "";
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        var displayText = key + ": " + value;
        var listItem = document.createElement('p');
        listItem.textContent = displayText;
        outputElement.appendChild(listItem);
    }
}
