import { Personaje } from './Personaje.js';

class Asesor extends Personaje {
  constructor(asesorado = '') {
    this.asesorado = asesorado;
  }
  comunicado() {
    return 'No sé por qué, pero creo que voy a morir pronto';
  }
}
