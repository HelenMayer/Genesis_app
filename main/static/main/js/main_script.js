let clickamount = 0;
function ShowMenu() {

  if (window.screen.width > 540) {
    document.getElementById("menu").style.display = "flex";
    document.getElementById("header").style.display = "flex";
  }

  if (window.screen.width <= 540) {
    clickamount++;
    if (clickamount % 2 != 0) {
      document.getElementById("menu").style.display = "block";
      document.getElementById("header").style.display = "block";
      document.getElementById("header").style.textAlign = "center";
    } else {
      document.getElementById("menu").style.display = "none";
    }
  }
}