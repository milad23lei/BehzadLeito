function openMoblieMenu() {
  var arrowUp = document.getElementById("menu-collpase-up");
  var mobileMenu = document.getElementById("section-collapse");
  var arrowDown = document.getElementById("menu-collpase-down");

  arrowUp.style.visibility = "hidden";
  arrowUp.style.opacity = "0";

  arrowDown.style.visibility = "visible";
  arrowUp.style.opacity = "1";

  mobileMenu.style.height = "300px";
}
function closeMoblieMenu() {
  var arrowUp = document.getElementById("menu-collpase-up");
  var mobileMenu = document.getElementById("section-collapse");
  var arrowDown = document.getElementById("menu-collpase-down");

  arrowUp.style.visibility = "visible";
  arrowUp.style.opacity = "1";

  arrowDown.style.visibility = "hidden";

  mobileMenu.style.height = "0px";
}

function Close_menu() {
  var menu = document.getElementById("section-collapse");
  var arrowUp = document.getElementById("menu-collpase-up");
  var arrowDown = document.getElementById("menu-collpase-down");

  menu.style.height = "0px";

  arrowUp.style.visibility = "visible";
  arrowUp.style.opacity = "1";

  arrowDown.style.visibility = "hidden";
}
