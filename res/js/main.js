const player = document.getElementById("player");
const attack = document.getElementById("attack");
const info = document.getElementById("info");
const yourHP = document.getElementById("yourHP");
const enemyHPend = document.getElementById("enemyHPend");
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
