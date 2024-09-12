import { Pokemon } from "./decorators/pokemon-class"

const charmader = new Pokemon ('Charmander');

(Pokemon.prototype as any).customName = 'Pikachu'
console.log(charmader);
