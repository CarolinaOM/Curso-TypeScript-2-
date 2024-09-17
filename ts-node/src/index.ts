import { Pokemon } from "./decorators/pokemon-class"

const charmader = new Pokemon ('Charmander');

//(Pokemon.prototype as any).customName = 'Pikachu'
//console.log(charmader.savePokemonToDB(3));

charmader.publicApi = 'https://caro.com';
console.log(charmader);

