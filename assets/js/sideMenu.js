
const sidenav = document.getElementById("sideMenu");
//console.log(sideMenu);
const hamburger = document.querySelector(".fal.fa-bars");

const closemenu = document.querySelector(".btnClose");
hamburger.addEventListener("click", function () {
  sidenav.style.width = 80 + "%";

  sidenav.style.right = 10 + "%";
  sidenav.style.left = 10 + "%";
});

closemenu.addEventListener("click", function () {
  sidenav.style.width = 0 + "%";
});
