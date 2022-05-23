import { Personaje } from './Personaje.js';

export class Asesor extends Personaje {
  constructor(
    nombre = '',
    familia = '',
    edad = 0,
    estado = true,
    img,
    asesorado = new Personaje()
  ) {
    super(nombre, familia, edad, estado, img);
    this.asesorado = asesorado;
  }
  comunicado() {
    return 'No sé por qué, pero creo que voy a morir pronto';
  }
}
