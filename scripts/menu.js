function makeMenuVisible() {
  document.getElementById("menu").style.display = "block";
  document.getElementById("menu").style.position = "relative";
  document.getElementById("hamburger").setAttribute("onclick", "makeMenuInvisible()");
}

function makeMenuInvisible() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("menu").style.position = "absolute";
  document.getElementById("hamburger").setAttribute("onclick", "makeMenuVisible()");
}

function fixMenu() {
  var w = document.body.clientWidth;

  if (w >= 832) {
    document.getElementById("menu").removeAttribute("style");
    document.getElementById("hamburger").setAttribute("onclick", "makeMenuVisible()");
  }
}
