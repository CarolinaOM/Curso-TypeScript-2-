//import { Hero as SuperHero, Hero2 } from "./clases/Hero";
import * as HeroClasses from "./clases/Hero";
import  powers from "./data/powers";

const Hero = 123;

//const iroman = new SuperHero('Iroman', 1, 56)
const iroman = new HeroClasses.Hero('Iroman', 1, 56)

console.log(iroman);

console.log(powers);