import { Personaje } from './Personaje.js';

export class Asesor extends Personaje {
  constructor(
    nombre = '',
    familia = '',
    edad = 0,
    estado = true,
    asesorado = ''
  ) {
    super(nombre, familia, edad, estado);
    this.asesorado = asesorado;
  }
  comunicado() {
    return 'No sé por qué, pero creo que voy a morir pronto';
  }
}
