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

// Function to handle login form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get the values entered by the user in the login form
    const loginEmail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;

    // Retrieve the stored cookies (user data)
    const storedEmail = getCookie("email");
    const storedPassword = getCookie("password");

    // Check if the entered email and password match the stored cookies
    if (loginEmail === storedEmail && loginPassword === storedPassword) {
        // If credentials match, redirect the user to the dashboard page
        window.location.href = "dashboard.html"; // Change this to your desired redirect URL
    } else {
        // If credentials do not match, show an error message
        alert("Invalid email or password.");
    }
});
