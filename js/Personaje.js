// export const character = [
//   { name: 'Joffrey', familyName: 'Baratheon', age: 34, state: true },
//   {
//     name: 'Jaime',
//     familyName: 'Lannister',
//     age: 41,
//     state: true,
//   },
//   {
//     name: 'Daenerys',
//     familyName: 'Targaryen',
//     age: 25,
//     state: true,
//   },
//   {
//     name: 'Tyrion',
//     familyName: 'Lannister',
//     age: 45,
//     state: true,
//   },
//   {
//     name: 'Bronn',
//     familyName: '',
//     age: 29,
//     state: true,
//   },
// ];
export class Personaje {
  constructor(nombre = '', familia = '', edad = 0, estado = true) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.estado = estado;
  }
}
