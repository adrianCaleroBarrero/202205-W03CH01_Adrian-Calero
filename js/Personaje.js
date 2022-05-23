export class Personaje {
  constructor(nombre = '', familia = '', edad = 0, estado = true, img) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.estado = estado;
    this.img = img;
  }
}
