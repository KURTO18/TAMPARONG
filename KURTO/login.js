function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        document.getElementById("loginResult").innerHTML = "Please enter both username and password.";
    } else {
        document.getElementById("loginResult").innerHTML = "Login successful! Welcome, " + username + "!";
        
        window.location.href = "PRO.html"; 
    }
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
