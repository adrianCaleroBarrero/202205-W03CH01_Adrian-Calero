import { Personaje, character } from './Personaje.js';
import { Rey } from './Rey.js';

function render(personaje) {
  console.log(personaje);
}

// render(new Personaje(character[0]));

let p1 = new Rey('pepe', 'urtado', 25, true, 5);
console.log(p1);
