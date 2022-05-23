import { Personaje } from './Personaje.js';

class Rey extends Personaje {
  constructor(reinado = 0) {
    this.reinado = reinado;
  }
  comunicado() {
    return 'Vais a morir todos';
  }
}
