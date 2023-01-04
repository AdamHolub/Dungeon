const sharpnes = document.getElementById("sharpnes");
const hp = document.getElementById("hp");

const wooden = document.getElementById("wooden");
const stone = document.getElementById("stone");
const iron = document.getElementById("iron");
const gold = document.getElementById("gold");
const dia = document.getElementById("dia");
const netherite = document.getElementById("netherite");

const descriptionwood = document.getElementById("descriptionwood");
const descriptionstone = document.getElementById("descriptionstone");
const descriptioniron = document.getElementById("descriptioniron");
const descriptiongold = document.getElementById("descriptiongold");
const descriptiondia = document.getElementById("descriptiondia");
const descriptionnetherite = document.getElementById("descriptionnetherite");

PlayerMaxHPcount = parseInt(sessionStorage.getItem("hpmax")) || 20;
countOfCoins = parseInt(sessionStorage.getItem("coiny")) || 0;
countOfDmg = parseInt(sessionStorage.getItem("dmg")) || 1;
PlayerHPcount = parseInt(sessionStorage.getItem("hp")) || PlayerMaxHPcount;

PlayerCoins.innerHTML = `Coins: ${countOfCoins}`;
PlayerDMG.innerHTML = `DMG: ${countOfDmg}`;
PlayerMaxHP.innerHTML = `Max HP: ${PlayerMaxHPcount}`;

let woodencount = parseInt(sessionStorage.getItem("wooden")) || 0;
parseInt(sessionStorage.setItem("wooden", woodencount));

let stonecount = parseInt(sessionStorage.getItem("stone")) || 0;
parseInt(sessionStorage.setItem("stone", stonecount));

let ironcount = parseInt(sessionStorage.getItem("iron")) || 0;
parseInt(sessionStorage.setItem("iron", ironcount));

let goldcount = parseInt(sessionStorage.getItem("gold")) || 0;
parseInt(sessionStorage.setItem("gold", goldcount));

let diacount = parseInt(sessionStorage.getItem("dia")) || 0;
parseInt(sessionStorage.setItem("dia", diacount));

let netheritecount = parseInt(sessionStorage.getItem("netherite")) || 0;
parseInt(sessionStorage.setItem("netherite", netheritecount));

sharpnes.onclick = () => {
  if (countOfCoins >= 50) {
    countOfDmg += 1;
    PlayerDMG.innerHTML = `DMG: ${countOfDmg}`;
    parseInt(sessionStorage.setItem("dmg", countOfDmg));
    countOfCoins -= 50;
    PlayerCoins.innerHTML = `Coins: ${countOfCoins}`;
    parseInt(sessionStorage.setItem("coiny", countOfCoins));
  }
};
hp.onclick = () => {
  if (countOfCoins >= 30) {
    PlayerMaxHPcount += 2;
    PlayerMaxHP.innerHTML = `Max HP: ${PlayerMaxHPcount}`;
    parseInt(sessionStorage.setItem("hpmax", PlayerMaxHPcount));
    countOfCoins -= 30;
    PlayerCoins.innerHTML = `Coins: ${countOfCoins}`;
    parseInt(sessionStorage.setItem("coiny", countOfCoins));
  }
};
wooden.onclick = () => {
    if (countOfCoins >= 100) {
      countOfDmg += 2;
      PlayerDMG.innerHTML = `DMG: ${countOfDmg}`;
      parseInt(sessionStorage.setItem("dmg", countOfDmg));
      woodencount += 1;
      descriptionwood.style.display = "none";
      wooden.style.display = "none";
      parseInt(sessionStorage.setItem("wooden", woodencount));
      countOfCoins -= 100;
      PlayerCoins.innerHTML = `Coins: ${countOfCoins}`;
      parseInt(sessionStorage.setItem("coiny", countOfCoins));
    }
  };
  
  if (woodencount == 1) {
    descriptionwood.style.display = "none";
    wooden.style.display = "none";
    parseInt(sessionStorage.setItem("wooden", woodencount));
  }
stone.onclick = () => {
    if(countOfCoins >= 500){
      countOfDmg += 5;
      PlayerDMG.innerHTML = `DMG: ${countOfDmg}`;
      parseInt(sessionStorage.setItem("dmg", countOfDmg));
      stonecount += 1;
      descriptionstone.style.display = "none";
      stone.style.display = "none";
      parseInt(sessionStorage.setItem("stone", stonecount));
      countOfCoins -= 500;
      PlayerCoins.innerHTML = `Coins: ${countOfCoins}`;
      parseInt(sessionStorage.setItem("coiny", countOfCoins));
    }
};

if(stonecount == 1){
    descriptionstone.style.display = "none";
    stone.style.display = "none";
    parseInt(sessionStorage.setItem("stone", stonecount));
}
iron.onclick = () => {
    if(countOfCoins >= 1000){
      countOfDmg += 10;
      PlayerDMG.innerHTML = `DMG: ${countOfDmg}`;
      parseInt(sessionStorage.setItem("dmg", countOfDmg));
      ironcount += 1;
      descriptioniron.style.display = "none";
      iron.style.display = "none";
      parseInt(sessionStorage.setItem("iron", ironcount));
      countOfCoins -= 1000;
      PlayerCoins.innerHTML = `Coins: ${countOfCoins}`;
      parseInt(sessionStorage.setItem("coiny", countOfCoins));
    }
};
if(ironcount == 1){
    iron.style.display = "none";
    descriptioniron.style.display = "none";
    parseInt(sessionStorage.setItem("iron", ironcount));
}
gold.onclick = () => {
    if(countOfCoins >= 2000){
      countOfDmg += 15;
      PlayerDMG.innerHTML = `DMG: ${countOfDmg}`;
      parseInt(sessionStorage.setItem("dmg", countOfDmg));
      goldcount += 1;
      descriptiongold.style.display = "none";
      gold.style.display = "none";
      parseInt(sessionStorage.setItem("gold", goldcount));
      countOfCoins -= 2000;
      PlayerCoins.innerHTML = `Coins: ${countOfCoins}`;
      parseInt(sessionStorage.setItem("coiny", countOfCoins));
    }
};
if(goldcount == 1){
    gold.style.display = "none";
    descriptiongold.style.display = "none";
    parseInt(sessionStorage.setItem("gold", goldcount));
}
dia.onclick = () => {
    if(countOfCoins >= 5000){
      countOfDmg += 20;
      PlayerDMG.innerHTML = `DMG: ${countOfDmg}`;
      parseInt(sessionStorage.setItem("dmg", countOfDmg));
      diacount += 1;
      descriptiondia.style.display = "none";
      dia.style.display = "none";
      parseInt(sessionStorage.setItem("dia", diacount));
      countOfCoins -= 5000;
      PlayerCoins.innerHTML = `Coins: ${countOfCoins}`;
      parseInt(sessionStorage.setItem("coiny", countOfCoins));
    }
};
if(diacount == 1){
    dia.style.display = "none";
    descriptiondia.style.display = "none";
    parseInt(sessionStorage.setItem("dia", diacount));
}
netherite.onclick = () => {
    if(countOfCoins >= 10000){
      countOfDmg += 30;
      PlayerDMG.innerHTML = `DMG: ${countOfDmg}`;
      parseInt(sessionStorage.setItem("dmg", countOfDmg));
      netheritecount += 1;
      descriptionnetherite.style.display = "none";
      netherite.style.display = "none";
      parseInt(sessionStorage.setItem("netherite", netheritecount));
      countOfCoins -= 10000;
      PlayerCoins.innerHTML = `Coins: ${countOfCoins}`;
      parseInt(sessionStorage.setItem("coiny", countOfCoins));
    }
};
if(netheritecount == 1){
    netherite.style.display = "none";
    descriptionnetherite.style.display = "none";
    parseInt(sessionStorage.setItem("netherite", netheritecount));
}