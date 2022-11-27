var menu = document.querySelectorAll(".menu")[0];
var navBar = document.querySelectorAll(".nav-bar")[0];
var c = document.querySelectorAll(".closed")[0];

menu.addEventListener("click", function(){
    navBar.classList.remove("hidden")
})
c.addEventListener("click", function(){
    navBar.classList.add("hidden")
})