function makeMenuVisible() {
  document.getElementById("menu").style.display = "block";
  document.getElementById("menu").style.position = "relative";
  document.getElementById("hamburger").setAttribute("onclick", "makeMenuInvisible()");
  document.getElementById("mheader").style.position = "relative";
  document.getElementById("layout").style.paddingTop = "0px";
}

function makeMenuInvisible() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("menu").style.position = "absolute";
  document.getElementById("hamburger").setAttribute("onclick", "makeMenuVisible()");
  document.getElementById("mheader").removeAttribute("style");
  document.getElementById("layout").removeAttribute("style");
}

function fixMenu() {
  var w = document.body.clientWidth;

  if (w >= 832) {
    makeMenuInvisible();
    document.getElementById("menu").removeAttribute("style");
    document.getElementById("hamburger").setAttribute("onclick", "makeMenuVisible()");
  }
}
