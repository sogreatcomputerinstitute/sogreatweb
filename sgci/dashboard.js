function openhelp(){
    document.getElementById("help").style.width = "300px";
    document.getElementById("help").style.height = "300px";
    document.getElementById("head").style.fontSize = "20px";
    document.getElementById("close").style.fontSize = "20px";
}
function closehelp(){
    document.getElementById("help").style.width = "0";
    document.getElementById("help").style.height = "0";
    document.getElementById("head").style.fontSize = "0";
    document.getElementById("close").style.fontSize = "0";
}

    function openNav() {
    document.getElementById("mySidebar").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
    }

    function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
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
  
          // Retrieve the username and email cookies
          const username = getCookie("username");
          const email = getCookie("email");
  
          // Show the user's data if it exists
          if (username && email) {
              newFunction();
          } else {
              window.location.href = "signup.html";
          }
function newFunction() {
    document.getElementById("welcome").innerHTML = `Welcome, ${username}!<br>Your email: <br> ${email}`;
}

          function openNav() {
            document.getElementById("mySidenav").style.width = "100%";
          }
          
          function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
          }
  