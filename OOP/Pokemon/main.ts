// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!


import { Pokemon } from "./pokemon";

let pokemonOfAsh: Pokemon[] = initializePokemon();



let wildPokemon: Pokemon = new Pokemon("Oddish", "leaf", "water");

// Which pokemon should Ash use?
let choiceOfAsh: string = "";
pokemonOfAsh.forEach(element => {
  if (element.isEffectiveAgainst(wildPokemon)) {
    choiceOfAsh = element.name;
  }
});
console.log("I choose you, " + choiceOfAsh);

function initializePokemon(): Pokemon[] {
  return [
    new Pokemon("Balbasaur", "leaf", "water"),
    new Pokemon("Pikatchu", "electric", "water"),
    new Pokemon("Charizard", "fire", "leaf"),
    new Pokemon("Balbasaur", "water", "fire"),
    new Pokemon("Kingler", "water", "fire")
  ];
}