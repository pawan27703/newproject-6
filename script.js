var isDarkMode = false; 

var heading = document.getElementsByTagName("h1")[0];
var body = document.body;  
var toggleCircle = document.getElementById("circle");
var toggleContainer = document.getElementById("toggle-container");
var icon = document.getElementById("icon");

document.getElementById("toggle-container").onclick = function () {
    isDarkMode = !isDarkMode;

    heading.classList.toggle("color-white", isDarkMode);
    body.classList.toggle("bck-color-black", isDarkMode);
    toggleCircle.classList.toggle("dark-mode", isDarkMode);
    
    
    toggleContainer.classList.toggle("active", isDarkMode);

    
    icon.innerHTML = isDarkMode ? "🌙" : "☀️"; 

    
    heading.classList.toggle("animate");
    setTimeout(() => {
        heading.classList.toggle("animate"); 
    }, 500);
}
