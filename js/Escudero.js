import { Personaje } from './Personaje.js';

export class Escudero extends Personaje {
  constructor(
    nombre = '',
    familia = '',
    edad = 0,
    estado = true,
    img,
    sirve = new Personaje(),
    pelotismo = 0
  ) {
    super(nombre, familia, edad, estado, img);
    this.sirve = sirve;
    this.pelotismo = pelotismo;
  }
  comunicado() {
    return 'Soy un loser';
  }
}
