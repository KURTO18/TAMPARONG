function getUsername() {
    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (username === "" || email === "" || password === "") {
        document.getElementById("result").innerHTML = "Please fill in all fields.";
    } else {
        document.getElementById("result").innerHTML = "Registration successful! Welcome, " + username + "!";
        window.location.href = 'login.html';  
    }
}
