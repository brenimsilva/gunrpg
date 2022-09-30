"use strict";
import { weapons } from "./src/Weapons.js";
import { weaponSelect } from "./src/HtmlElements.js";
import { info } from "./src/HtmlElements.js";

const mobStats = {
  mobHp: document.getElementById("mobHp"),
  mobHpInt: 20,
};

mobStats.mobHpInt = Math.floor(Math.random() * 30) + 5;

const playerStats = {
  playerHp: 20,
  playerAtk: 1,
  playerDef: 1,
  playerEquipments: {
    weapon: {},
    armor: {},
    shield: {},
  },
  playerInventory: [...weapons],
};

mobStats.mobHp.innerText = mobStats.mobHpInt;

const commands = {
  attackBtn: document.getElementById("attack"),
  attack: function (mob, damage) {
    mob.mobHpInt = mob.mobHpInt - damage;
    if (mob.mobHpInt < 1) {
      mob.mobHpInt = 0;
      console.log("dead");
    }
    mob.mobHp.innerText = mob.mobHpInt;
  },
};

commands.attackBtn.addEventListener("click", () =>
  commands.attack(
    mobStats,
    playerStats.playerAtk + playerStats.playerEquipments.weapon.damage
  )
);

function updateWeapons(playerInventory) {
  playerInventory.forEach((element) => {
    const option = document.createElement("option");
    option.innerText = element.name;
    option.style.color = element.rarity.color;
    option.classList.add("weaponOptions");
    weaponSelect.appendChild(option);
  });
}
updateWeapons(playerStats.playerInventory);

function updatePlayerWeapon(playerEquipments, itemName) {
  const itemSelected = weapons.filter((item) => {
    return item.name == itemName;
  });
  playerEquipments.weapon = itemSelected[0];
  setTimeout(() => {
    info.innerText = `Voce esta equipando: \n {\n${playerEquipments.weapon.getData()}\n}`;
  }, 1000);
  info.innerText = `Voce esta equipando: `;
}
weaponSelect.addEventListener("change", (e) => {
  updatePlayerWeapon(playerStats.playerEquipments, e.target.value);
});
updatePlayerWeapon(playerStats.playerEquipments, weaponSelect.value);
