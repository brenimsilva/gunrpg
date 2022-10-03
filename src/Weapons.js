import Weapon from "./Classes/Weapon.js";
import { rarities } from "./Classes/rarities.js";
import Utilitario from "./Classes/Utilitario.js";

export const weapons = [
  new Weapon("Revolver", 2, "WEAPON", "PISTOL", rarities[0], 0, 10),
  new Weapon("Pistol", 3, "WEAPON", "PISTOL", rarities[1], 0, 10),
  new Weapon("Deagle", 5, "WEAPON", "PISTOL", rarities[2], 0, 10),
  new Weapon("Colt", 8, "WEAPON", "RIFLE", rarities[3], 0, 10),
  new Weapon("Justice", 15, "WEAPON", "PISTOL", rarities[4], 0, 10),
  new Weapon("Prudence", 15, "WEAPON", "PISTOL", rarities[4], 0, 10),
  new Weapon("Wisdom", 15, "WEAPON", "PISTOL", rarities[4], 0, 10),
  new Weapon("Divine Virtue", 30, "WEAPON", "PISTOL", rarities[5], 0, 10),
  new Weapon("SMG", 3, "WEAPON", "SMG", rarities[0]),
  new Weapon("Knife", 1, "WEAPON", "BLADE", rarities[0], 0, 10),
];
