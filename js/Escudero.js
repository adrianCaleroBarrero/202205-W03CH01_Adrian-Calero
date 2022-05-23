import { Personaje } from './Personaje.js';

class Escudero extends Personaje {
  constructor(sirve = '', pelotismo = 0) {
    this.sirve = sirve;
    this.pelotismo = pelotismo;
  }
  comunicado() {
    return 'Soy un loser';
  }
}
