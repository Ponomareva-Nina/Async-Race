/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-new */
/* eslint-disable no-use-before-define */
import '../styles/style.scss';
import '../assets/images/flag.png';

import Header from './header';
import { GaragePage } from './garage';
import { WinnersPage } from './winners';
import { car } from './base_components';
import { createNewCar, removeCar } from './api';

const body: HTMLElement = document.getElementById('body') as HTMLElement;
new Header(body);
renderGarage();

// навешиваем обработчики на кнопки в body:
body.addEventListener('click', async (event) => {
  const target = <HTMLElement>event.target;
  if (target.classList.contains('btn-garage')) {
    renderGarage();
  } else if (target.classList.contains('btn-winners')) {
    renderWinners();
  } else if (target.classList.contains('create-car__btn')) {
    createCar();
  } else if (target.classList.contains('btn-remove')) {
    removeCar(Number(target.id));
    renderGarage();
  }
});

async function renderWinners() {
  clearPage();
  const winnersPage = new WinnersPage(body);
  await winnersPage.renderWinnersPage();
}

async function renderGarage() {
  clearPage();
  const garage = await new GaragePage(body, { color: 'yellow', text: 'VolksWagen' });
  await garage.renderCars();
}

function clearPage(): void {
  const section = document.querySelector('.section') as HTMLElement;
  if (section) { body.removeChild(section); }
}

async function createCar() {
  const nameInput = document.querySelector('.create-car__text-input') as HTMLInputElement;
  const colorInput = document.querySelector('.create-car__color-input') as HTMLInputElement;
  const newCar = { name: nameInput.value, color: colorInput.value };
  await createNewCar(newCar);
  await renderGarage();
}
