window.onload = function() {
   document.getElementById("menuIcon").onclick = openNav;
}

function openNav() {
   document.getElementById("mobileMenu").style.width = "250px";
}

function closeNav() {
   document.getElementById("mobileMenu").style.width = "0";
}