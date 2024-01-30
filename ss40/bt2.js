document.addEventListener('submit', function (event) {
    event.preventDefault();
});
displayStoredPlayers();
function savePlayer() {
    let playerName = document.getElementById('playerName').value;
    if (playerName === "") {
        alert("không được để trống.");
        return;
    }
    var player = {
        id: Math.ceil(Math.random()*100000000),
        name: playerName
    };
    var players = getStoredPlayers();
    players.push(player);
    localStorage.setItem('footballPlayers', JSON.stringify(players));
    displayStoredPlayers();
    playerNameInput.value = "";
}
function getStoredPlayers() {
    var storedPlayers = localStorage.getItem('footballPlayers');
    if (storedPlayers) {
        return JSON.parse(storedPlayers);
    } else {
        return [];
    }
}
function displayStoredPlayers() {
    var players = getStoredPlayers();
    var playerListElement = document.getElementById('playerList');
    playerListElement.innerHTML = "";
    players.forEach(function (player) {
        var listItem = document.createElement('li');
        listItem.textContent = player.name;
        playerListElement.appendChild(listItem);
    });
}
