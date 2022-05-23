import { Asesor } from './Asesor.js';
import { Escudero } from './Escudero.js';
import { Luchador } from './Luchador.js';
import { Rey } from './Rey.js';

let joffrey = new Rey('Joffrey', 'Baratheon', 45, true, './img/joffrey.jpg', 9);
let jaime = new Luchador(
  'Jaime',
  'Lannister',
  39,
  true,
  './img/jaime.jpg',
  'Espada',
  8
);
let daenerys = new Luchador(
  'Daenerys',
  'Targaryen',
  27,
  true,
  './img/daenerys.jpg',
  'Dragones',
  10
);
let tyrion = new Asesor(
  'Tyrion',
  'Lannister',
  44,
  true,
  './img/tyrion.jpg',
  daenerys
);
let bronn = new Escudero('Bronn', null, 23, true, './img/bronn.jpg', jaime, 6);

export const juegoDeTronos = [joffrey, jaime, daenerys, tyrion, bronn];
