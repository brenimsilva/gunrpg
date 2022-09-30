import Weapon from "./Classes/Weapon.js";
import { rarities } from "./Classes/Rarity.js";

export const weapons = [
  new Weapon("Revolver", 2, "WEAPON", "PISTOL", rarities[0]),
  new Weapon("Pistol", 3, "WEAPON", "PISTOL", rarities[1]),
  new Weapon("Deagle", 5, "WEAPON", "PISTOL", rarities[2]),
  new Weapon("Colt", 8, "WEAPON", "PISTOL", rarities[3]),
  new Weapon("Justice", 15, "WEAPON", "PISTOL", rarities[4]),
  new Weapon("Prudence", 15, "WEAPON", "PISTOL", rarities[4]),
  new Weapon("Wisdom", 15, "WEAPON", "PISTOL", rarities[4]),
  new Weapon("Divine Virtue", 30, "WEAPON", "PISTOL", rarities[5]),
  new Weapon("SMG", 3, "WEAPON", "SMG", rarities[0]),
  new Weapon("Knife", 1, "WEAPON", "BLADE", rarities[0]),
];
