document.addEventListener('submit', function (event) {
    event.preventDefault();
});
function deletePlayer() {
    var playerIdInput = document.getElementById('playerId');
    var playerId = playerIdInput.value.trim();
    if (playerId === "") {
        alert("Không đc để trống.");
        return;
    }
    var players = getStoredPlayers();
    var playerIndex = players.findIndex(function (player) {
        return player.id === playerId;
    });
    if (playerIndex !== -1) {
        players.splice(playerIndex, 1);
        localStorage.setItem('footballPlayers', JSON.stringify(players));
        displayStoredPlayers();
        playerIdInput.value = "";
    } else {
        alert("id cầu thủ bạn tìm không có.");
    }
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
        listItem.textContent = player.name + " (ID: " + player.id + ")";
        playerListElement.appendChild(listItem);
    });
}
