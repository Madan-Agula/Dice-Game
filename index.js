const player1 = document.getElementById("tscore1");
const player2 = document.getElementById("tscore2");
let currentplayer = 1;
let maxvalue = Math.floor(Math.random() * 100) + 1;
document.getElementById("maxValue").textContent = maxvalue;

const plycol1 = document.getElementById("player1-container");
const plycol2 = document.getElementById("player2-container");
let color1 = "background-color: #ffffff66;";
let color2 = "background-color: rgb(251, 199, 208);";
let color = "background-color: #4CAF50;";

if (currentplayer == 1) {
  plycol1.style = color1;
}
function rolldice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  if(currentplayer){
    const src = "./images/dice-" + randomNumber + ".png";
    document.getElementById("imag").setAttribute("src", src);
  }
  if (
    currentplayer == 1 &&
    parseInt(player1.textContent) + randomNumber <= maxvalue
  ) {
    if (parseInt(player1.textContent) + randomNumber == maxvalue) {
      currentplayer = 0;
      let score = parseInt(player1.textContent);
      score += randomNumber;
      player1.textContent = score;
      plycol1.style = color;
      plycol2.style = color2;
    } else {
      let score = parseInt(player1.textContent);
      score += randomNumber;
      player1.textContent = score;
      plycol1.style = color2;
      plycol2.style = color1;
      currentplayer = 2;
    }
  } else if (
    currentplayer == 2 &&
    parseInt(player2.textContent) + randomNumber <= maxvalue
  ) {
    if (parseInt(player2.textContent) + randomNumber == maxvalue) {
      currentplayer = 0;
      let score = parseInt(player2.textContent);
      score += randomNumber;
      player2.textContent = score;
      plycol1.style = color2;
      plycol2.style = color;
    } else {
      let score = parseInt(player2.textContent);
      score += randomNumber;
      player2.textContent = score;
      currentplayer = 1;
      plycol1.style = color1;
      plycol2.style = color2;
    }
  } else {
    if (currentplayer == 1) {
      currentplayer = 2;
      plycol1.style = color2;
      plycol2.style = color1;
    } else if (currentplayer == 2) {
      currentplayer = 1;
      plycol1.style = color1;
      plycol2.style = color2;
    }
  }
}

function newGame() {
  player1.textContent = 0;
  player2.textContent = 0;
  currentplayer = 1;
  const src = "./images/dice-" + 1 + ".png";
  document.getElementById("imag").setAttribute("src", src);
  maxvalue = Math.floor(Math.random() * 100) + 1;
  document.getElementById("maxValue").textContent = maxvalue;
  plycol1.style = color1;
  plycol2.style = color2;
}
