function openNav() {
    document.getElementById("mySidebar").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
// Profile code
function profile() {
    newFunction();

    function newFunction() {
        document.getElementById("profile").style.width = "100%";
        document.getElementById("profile").style.height = "100%";
        document.getElementById("wel").style.fontSize = "21x";
        document.getElementById("welcome").style.fontSize = "20px";
        document.getElementById("close").style.fontSize = "20px";
        document.getElementById("img").style.width = "30%";
        document.getElementById("pbtn").style.fontSize = "20px";
        document.getElementById("dbtn").style.fontSize = "20px";
    }
}
function closeprofile() {
    document.getElementById("profile").style.width = "0";
    document.getElementById("profile").style.height = "0";
    document.getElementById("wel").style.fontSize = "0";
    document.getElementById("welcome").style.fontSize = "0";
    document.getElementById("close").style.fontSize = "0";
    document.getElementById("img").style.width = "0";
    document.getElementById("pbtn").style.fontSize = "0";
    document.getElementById("dbtn").style.fontSize = "0";
}
 // Function to get a cookie by name
 function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null; // Return null if the cookie doesn't exist
}
function Retrieve() {
// Retrieve the username and email cookies
const username = getCookie("username");
const email = getCookie("email");

// Show the user's data if it exists
if (username && email) {
    document.getElementById("welcome").innerHTML = `Welcome, ${username}!<br>Your email is: <br>${email}`;
} else {
    window.location.href = "signup.html";
}
}
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
