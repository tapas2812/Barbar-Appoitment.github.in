
// Menu Bar******************************************************
var menubtn = document.getElementById("menubtn");
var nav = document.getElementById("nav");
var menu = document.getElementById("menu");


nav.style.right = "-200px";

menubtn.onclick = function(){
    if(nav.style.right == "-200px")
        {
        nav.style.right = "0";
        menu.src = "images/close.png";
    }
    else{
        nav.style.right = "-200px";
        menu.src = "images/menu.png";
    }
}

