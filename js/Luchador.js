import { Personaje } from './Personaje.js';

class Luchador extends Personaje {
  constructor(arma = '', destreza = 0) {
    this.arma = arma;
    this.destreza = destreza;
  }
  comunicado() {
    return 'Primero pego y luego pregunto';
  }
}
