import { Asesor } from './Asesor.js';
import { Escudero } from './Escudero.js';
import { Luchador } from './Luchador.js';
import { juegoDeTronos } from './personajes.js';
import { Rey } from './Rey.js';

function render(array) {
  array.forEach((item) => {
    document.querySelector(
      '.container-change'
    ).innerHTML += `<ul class="characters-list row list-unstyled">
        <li class="character col">
          <div class="card character__card">
            <img
              src="${item.img}"
              alt="${item.nombre} ${item.familia}"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">${item.nombre} ${item.familia}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${item.edad} años</li>
                  <li>
                    Estado:`;
    if (item.estado === true) {
      `<i class="fas fa-thumbs-up"></i>`;
    } else {
      `<i class="fas fa-thumbs-down"></i>`;
    }

    `
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">`;
    if (item instanceof Rey) {
      `<li>Años de reinado: ${item.reinado}</li></ul>`;
    } else if (item instanceof Luchador) {
      `<li>Arma: ${item.arma}</li>
                  <li>Destreza: ${item.destreza}</li></ul>`;
    } else if (item instanceof Asesor) {
      `<li>Asesora a: ${item.asesorado}</li></ul>`;
    } else if (item instanceof Escudero) {
      `<li>Peloteo: ${item.pelotismo}</li>

                  <li>Sirve a: ${item.sirve}</li></ul>`;
    }
  });
}

render(juegoDeTronos);

// render(new Personaje(character[0]));
