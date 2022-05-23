import { Personaje } from './Personaje.js';

export class Rey extends Personaje {
  constructor(nombre = '', familia = '', edad = 0, estado = true, reinado = 0) {
    super(nombre, familia, edad, estado);
    this.reinado = reinado;
  }
  comunicado() {
    return 'Vais a morir todos';
  }
}
