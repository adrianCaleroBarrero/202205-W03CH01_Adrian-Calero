import { Personaje } from './Personaje.js';

export class Escudero extends Personaje {
  constructor(
    nombre = '',
    familia = '',
    edad = 0,
    estado = true,
    sirve = '',
    pelotismo = 0
  ) {
    super(nombre, familia, edad, estado);
    this.sirve = sirve;
    this.pelotismo = pelotismo;
  }
  comunicado() {
    return 'Soy un loser';
  }
}
