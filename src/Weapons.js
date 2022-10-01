import Weapon from "./Classes/Weapon.js";
import { rarities } from "./Classes/Rarity.js";
import { util } from "./Classes/Utilitario.js";

export const weapons = [
  new Weapon(util.generateID(), "Revolver", 2, "WEAPON", "PISTOL", rarities[0]),
  new Weapon(util.generateID(), "Pistol", 3, "WEAPON", "PISTOL", rarities[1]),
  new Weapon(util.generateID(), "Deagle", 5, "WEAPON", "PISTOL", rarities[2]),
  new Weapon(util.generateID(), "Colt", 8, "WEAPON", "PISTOL", rarities[3]),
  new Weapon(util.generateID(), "Justice", 15, "WEAPON", "PISTOL", rarities[4]),
  new Weapon(
    util.generateID(),
    "Prudence",
    15,
    "WEAPON",
    "PISTOL",
    rarities[4]
  ),
  new Weapon(util.generateID(), "Wisdom", 15, "WEAPON", "PISTOL", rarities[4]),
  new Weapon(
    util.generateID(),
    "Divine Virtue",
    30,
    "WEAPON",
    "PISTOL",
    rarities[5]
  ),
  new Weapon(util.generateID(), "SMG", 3, "WEAPON", "SMG", rarities[0]),
  new Weapon(util.generateID(), "Knife", 1, "WEAPON", "BLADE", rarities[0]),
];
