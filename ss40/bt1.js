document.addEventListener('DOMContentLoaded', function () {
    displayStoredInfo();
});
displayStoredInfo();
function savePersonalInfo() {
    var fullName = document.getElementById('fullName').value;
    var age = document.getElementById('age').value;
    var email = document.getElementById('email').value;
    var personalInfo = {
        fullName: fullName,
        age: age,
        email: email
    };
    localStorage.setItem('info', JSON.stringify(personalInfo));
}
function displayStoredInfo() {
    var storedInfo = localStorage.getItem('info');
    if (storedInfo) {
        let info = JSON.parse(storedInfo);
        let displayElement = document.getElementById('displayInfo');
        displayElement.innerHTML = `
            <p>Name:${info.fullName}</p>
            <p>Age:${info.age}</p>
            <p>Email:${info.email}</p>
        `;
    }
}

