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
var myVar;
        
        function myFunction() {
          myVar = setTimeout(showPage, 3000);
        }
        
        function showPage() {
          document.getElementById("loader").style.display = "none";
          document.getElementById("let").style.display = "block";
        }
      
        function opennav(){
          document.getElementById("nav-bar").style.width = "200px";
          document.getElementById("close-home").style.fontSize = "20px";
          document.getElementById("closenav").style.fontSize = "20px";
          document.getElementById("close-about").style.fontSize = "20px";
          document.getElementById("close-game").style.fontSize = "20px";
          document.getElementById("o").style.width = "0";
          document.getElementById("o").style.width = "0";
          document.getElementById("close-social").style.fontSize = "20px";
          document.getElementById("close-computer").style.fontSize = "20px";
      }
      function closenav(){
          document.getElementById("nav-bar").style.width = "70px";
          document.getElementById("close-home").style.fontSize = "0";
          document.getElementById("closenav").style.fontSize = "0";
          document.getElementById("close-about").style.fontSize = "0";
          document.getElementById("close-game").style.fontSize = "0";
          document.getElementById("o").style.width = "50px";
          document.getElementById("close-social").style.fontSize = "0";
          document.getElementById("close-computer").style.fontSize = "0";
      }