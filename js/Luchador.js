import { Personaje } from './Personaje.js';

export class Luchador extends Personaje {
  constructor(
    nombre = '',
    familia = '',
    edad = 0,
    estado = true,
    img,
    arma = '',
    destreza = 0
  ) {
    super(nombre, familia, edad, estado, img);
    this.arma = arma;
    this.destreza = destreza;
  }
  comunicado() {
    return 'Primero pego y luego pregunto';
  }
}
