const player = document.getElementById("player");
const attack = document.getElementById("attack");
const info = document.getElementById("info");
const yourHP = document.getElementById("yourHP");
const enemyHPnether = document.getElementById("enemyHPnether");
const PlayerDMG = document.getElementById("PlayerDMG");
const PlayerCoins = document.getElementById("PlayerCoins");
const PlayerMaxHP = document.getElementById("PlayerMaxHP");

let PlayerMaxHPcount = parseInt(sessionStorage.getItem("hpmax")) || 20;
let countOfCoins = parseInt(sessionStorage.getItem("coiny")) || 0;
let countOfDmg = parseInt(sessionStorage.getItem("dmg")) || 2;
let PlayerHPcount = parseInt(sessionStorage.getItem("hp")) || PlayerMaxHPcount;

parseInt(sessionStorage.setItem("hpmax", PlayerMaxHPcount));
parseInt(sessionStorage.setItem("coiny", countOfCoins));
parseInt(sessionStorage.setItem("dmg", countOfDmg));
parseInt(sessionStorage.setItem("hp", PlayerHPcount));

PlayerMaxHP.innerHTML = `Max HP: ${PlayerMaxHPcount}`;
PlayerCoins.innerHTML = `Coins: ${countOfCoins}`;
PlayerDMG.innerHTML = `DMG: ${countOfDmg}`;
yourHP.innerHTML = PlayerHPcount || 20;

let CountOfPlayerCoins = 0;
let pomucka = 1;

let interv = setInterval(() => {
  PlayerHPcount-=1;
  yourHP.innerHTML = PlayerHPcount;
  parseInt(sessionStorage.setItem("hp", PlayerHPcount));
  if (PlayerHPcount <= 0) {
    info.innerHTML = "Info: Si mrtvý!";
    clearInterval(interv);
    player.style.left = `${42}%`;
    countOfCoins -= 5;
    PlayerCoins.innerHTML = `Coins: ${countOfCoins}`;
    parseInt(sessionStorage.setItem("coiny", countOfCoins));
  }
}, 250);

attack.onmousedown = () => {
  if (enemyHPnether.innerHTML > 0 && PlayerHPcount > 0) {
    player.style.left = `${50}%`;
    enemyHPnether.innerHTML -= countOfDmg;
  }
  if (enemyHPnether.innerHTML <= 0) {
    info.innerHTML = "Info: Zabil si enemy!";
    clearInterval(interv);
    pomucka--;
  }
  if (enemyHPnether.innerHTML <= 0 && pomucka == 0) {
    countOfCoins += 20;
    PlayerCoins.innerHTML = `Coins: ${countOfCoins}`;
    parseInt(sessionStorage.setItem("coiny", countOfCoins));
    enemyHPnether.innerHTML = 0;
  }
};

attack.onmouseup = () => {
  if (PlayerHPcount > 0) {
    player.style.left = `${42}%`;
  }
};