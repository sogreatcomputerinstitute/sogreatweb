// Function to set cookies securely with no expiration date
function setCookie(name, value) {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 10); // Set cookie to expire in 10 years (adjust as needed)
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/; Secure; SameSite=Strict`;
}

// Function to handle form submission
document.getElementById("user-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get the values from the input fields
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Save the user data as cookies with an expiration date far in the future
    setCookie("username", username);
    setCookie("email", email);
    setCookie("password", password);

    // Optionally, show a message after saving the data
    alert("Your data has been securely saved!");

    // Redirect the user to a new page (e.g., a dashboard or homepage)
    window.location.href = "login.html"; // Change this to your desired redirect URL
});
