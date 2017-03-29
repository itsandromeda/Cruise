/*global document, window, sessionStorage*/
/*jslint eqeq: true*/
window.addEventListener('load', function () {
    "use strict";
    var logIn = document.getElementById('sign-in');

    logIn.addEventListener('click', function () {
        var username = document.getElementById('username').value,
            password = document.getElementById('pw').value,
            userError = document.getElementById('error-a'),
            pwError = document.getElementById('error-b'),
            users,
            i;

        sessionStorage.setItem("usuario", username);

        users = [{
            id: "itsandromeda",
            username: "itsandromeda",
            password: "itsandromeda",
            cruise: "index.html?id=itsandromeda"
        }, {
            id: "emma",
            username: "emma",
            password: "emma",
            cruise: "index.html?id=emma"
        }];

        for (i = 0; i < users.length; i += 1) {
            if (username == users[0].username && password == users[0].password) {
                window.location = users[0].cruise;
            }
            if (username == users[1].username && password == users[1].password) {
                window.location = users[1].cruise;
            }
            /*USERNAME VALIDATION*/
            if (username === "") {
                userError.innerHTML = "This field can't be blank.";
            } else if (username !== users[0].username || username !== users[1].username) {
                userError.innerHTML = "This user doesn't exist.";
            }
            if (username == users[0].username || username == users[1].username) {
                userError.innerHTML = "";
            }
            /*PASSWORD VALIDATION*/
            if (password === "") {
                pwError.innerHTML = "This field can't be blank.";
            } else if (password !== users[0].password || password !== users[1].password) {
                pwError.innerHTML = "The password is incorrect.";
            }
            if (password == users[0].password || password == users[1].password) {
                pwError.innerHTML = "";
            }
        }
    });
});