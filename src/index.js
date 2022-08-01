const mainbtn = document.getElementById("mainbut");
const scored = document.getElementById("score");
const upgrade = document.getElementById("Upgrades");
const upbtn = document.getElementById("upbut");
const up1 = document.getElementById("Cursor");
const clicksound = document.getElementById("click");
const js = document.getElementById("js");
const Div = document.getElementById("div");

let score = 0;

//game animations
function animations() {
  //When mouse hovers make bigger
  mainbtn.onmouseenter = function bigger() {
    mainbtn.style.width = "450px";
    mainbtn.style.transform = "rotate(90deg)";
  };
  //When mouse leaves make smaller
  mainbtn.onmouseleave = function smaller() {
    mainbtn.style.width = "400px";
    mainbtn.style.transform = "rotate(-90deg)";
  };
  upbtn.onclick = function upgradebtn() {
    if (upgrade.style.height === "0px") {
      upgrade.style.height = "400px";
      upgrade.style.visibility = "visible";
      return;
    }
    upgrade.style.height = "0px";
    upgrade.style.visibility = "hidden";
  };
  upbtn.onmouseenter = function () {
    upbtn.style.backgroundColor = "green";
    upbtn.style.width = "70px";
  };
  upbtn.onmouseleave = function () {
    upbtn.style.backgroundColor = "#582802";
    upbtn.style.width = "65px";
  };
}
//big chocolate button
function mainbuttonclick() {
  function small() {
    mainbtn.style.width = "400px";
    mainbtn.style.transition = "0.5s";
  }
  mainbtn.onclick = function clicked() {
    score += 1;
    updatescore();
    mainbtn.style.transition = "0.1s";
    mainbtn.style.width = "470px";
    setTimeout(small, 100);
  };
}
//upgrade buttons
function upgrades() {
  up1.onclick = function () {
    if (score >= 50) {
      score -= 50;
      updatescore();
      cursor();
    }
  };
}
//cursorloop
function cursor() {
  clicksound.play();
  score += 1;
  updatescore();
  setTimeout(cursor, 5000);
}
function updatescore() {
  scored.innerText = "Chocolates: " + score;
  scored.style.fontSize = "20px";
  setTimeout(smallscore, 100);
}
function smallscore() {
  scored.style.fontSize = "15px";
}
function jsloop() {
  js.style.transform = "rotate(-90deg)";
  setTimeout(jsooop, 2000);
}
function jsooop() {
  js.style.transform = "rotate(0deg)";
  setTimeout(jslop, 2000);
}
function jslop() {
  js.style.transform = "rotate(90deg)";
  setTimeout(jsloop, 2000);
}
function animbeat() {
  upbtn.style.width = "70px";
  upbtn.style.height = "45px";
  upbtn.style.right = "10px";
  upbtn.style.top = "7px";
  mainbtn.style.top = "0px";
  Div.style.height = "62px";
  setTimeout(animbea, 500);
}
function animbea() {
  upbtn.style.width = "65px";
  upbtn.style.height = "50px";
  upbtn.style.right = "5px";
  upbtn.style.top = "5px";
  mainbtn.style.top = "10px";
  Div.style.height = "60px";
  setTimeout(animbeat, 500);
}

animbeat();
animations();
mainbuttonclick();
upgrades();
jsooop();
