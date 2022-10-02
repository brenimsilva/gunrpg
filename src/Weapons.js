import Weapon from "./Classes/Weapon.js";
import { rarities } from "./Classes/rarities.js";
import Utilitario from "./Classes/Utilitario.js";

export const weapons = [
  new Weapon(
    Utilitario.generateID(),
    "Revolver",
    2,
    "WEAPON",
    "PISTOL",
    rarities[0],
    0,
    10
  ),
  new Weapon(
    Utilitario.generateID(),
    "Pistol",
    3,
    "WEAPON",
    "PISTOL",
    rarities[1],
    0,
    10
  ),
  new Weapon(
    Utilitario.generateID(),
    "Deagle",
    5,
    "WEAPON",
    "PISTOL",
    rarities[2],
    0,
    10
  ),
  new Weapon(
    Utilitario.generateID(),
    "Colt",
    8,
    "WEAPON",
    "PISTOL",
    rarities[3],
    0,
    10
  ),
  new Weapon(
    Utilitario.generateID(),
    "Justice",
    15,
    "WEAPON",
    "PISTOL",
    rarities[4],
    0,
    10
  ),
  new Weapon(
    Utilitario.generateID(),
    "Prudence",
    15,
    "WEAPON",
    "PISTOL",
    rarities[4],
    0,
    10
  ),
  new Weapon(
    Utilitario.generateID(),
    "Wisdom",
    15,
    "WEAPON",
    "PISTOL",
    rarities[4],
    0,
    10
  ),
  new Weapon(
    Utilitario.generateID(),
    "Divine Virtue",
    30,
    "WEAPON",
    "PISTOL",
    rarities[5],
    0,
    10
  ),
  new Weapon(Utilitario.generateID(), "SMG", 3, "WEAPON", "SMG", rarities[0]),
  new Weapon(
    Utilitario.generateID(),
    "Knife",
    1,
    "WEAPON",
    "BLADE",
    rarities[0],
    0,
    10
  ),
];
