//import { Hero} from "./clases/Hero";
//import { Hero as SuperHero, Hero2 } from "./clases/Hero";
//import * as HeroClasses from "./clases/Hero";
//import powers from './data/powers';

//const iroman = new SuperHero('Iroman', 1, 56)
//const iroman = new Hero ('Iroman', 10, 56)

//console.log(iroman);
//console.log(iroman.power);




import { printObject, genericFuntion, genericFunctionArrow } from './generics/generics';

//printObject(123);
//printObject(new Date());
//printObject({a:1, b:2, c:3});
//printObject([1,2,3,4,5,6,7,8,9]);
//printObject('Hola Mundo');

const name: string = 'Caro';

console.log(genericFunctionArrow(3.141618).toFixed(2));
console.log(genericFunctionArrow(new Date().getDate));
console.log(genericFunctionArrow(name).toUpperCase());

