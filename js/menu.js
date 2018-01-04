(function () {
   window.onload = function() {
      document.getElementById("menuIcon").onclick = openNav;
      document.getElementById("closebtn").onclick = closeNav;
   }

   function openNav() {
      //Delay showing social media icons
      setTimeout(function() {
         document.getElementById("socialMediaIcons").style.display = "block";
      }, 500);
      document.getElementById("mobileMenu").style.width = "250px";
      document.getElementById("container").style.backgroundColor = "rgba(0,0,0,0.2)";
   }

   function closeNav() {
      document.getElementById("mobileMenu").style.width = "0";
      document.getElementById("socialMediaIcons").style.display = "none";
      document.getElementById("container").style.backgroundColor = "white";
   }
})();