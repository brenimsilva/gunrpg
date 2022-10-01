"use strict";
import { weapons } from "./src/Weapons.js";
import { weaponSelect } from "./src/HtmlElements.js";
import { info } from "./src/HtmlElements.js";
import { util } from "./src/Classes/Utilitario.js";
import Player from "./src/Classes/Player.js";

const mobStats = {
  mobHp: document.getElementById("mobHp"),
  mobHpInt: 20,
};
mobStats.mobHpInt = Math.floor(Math.random() * 30) + 5;
const human = new Player(util.generateID(), "Breno", 20, 1, 1);
human.initiateInventory(weapons);

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
    human.extraAtributes.ATK + human.equipments.weapon.damage
  )
);

function updateWeapons(player) {
  const currentWeapon = player.equipments.weapon.name
    ? player.equipments.weapon.name
    : "";
  weaponSelect.innerHTML = `<option>${currentWeapon}</option>`;
  player.inventory.forEach((element) => {
    const option = document.createElement("option");
    option.innerText = element.name;
    option.style.color = element.rarity.color;
    option.classList.add("weaponOptions");
    weaponSelect.appendChild(option);
  });
}
updateWeapons(human);

function updatePlayerInv(action, item, player) {
  if (action === "REMOVE") {
    const oldInv =
      Object.keys(player.equipments.weapon).length > 0
        ? [...player.inventory, player.equipments.weapon]
        : [...player.inventory];
    const updatedInv = oldInv.filter((element) => {
      return item.id !== element.id;
    });
    player.inventory = [...updatedInv];
    console.log(player.inventory);
  }
}

function updatePlayerWeapon(equipments, itemName) {
  const itemSelected = weapons.filter((item) => {
    return item.name == itemName;
  });
  if (itemSelected.length === 1) {
    updatePlayerInv("REMOVE", itemSelected[0], human);
    equipments.weapon = itemSelected[0];
    setTimeout(() => {
      info.innerText = `Voce esta equipando: \n {\n${equipments.weapon.getData()}\n}`;
    }, 1000);
    info.innerText = `Voce esta equipando: `;
  }
  updateWeapons(human);
}

weaponSelect.addEventListener("change", (e) => {
  updatePlayerWeapon(human.equipments, e.target.value);
});
updatePlayerWeapon(human.equipments, weaponSelect.value);
