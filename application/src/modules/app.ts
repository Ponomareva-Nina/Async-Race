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
import { createNewCar, deleteCar } from './api';

const body: HTMLElement = document.getElementById('body') as HTMLElement;

new Header(body);
renderGarage();

const garageBtn = document.querySelector('.btn-garage') as HTMLElement;
const winnersBtn = document.querySelector('.btn-winners') as HTMLElement;

// навешиваем обработчики на кнопки-переключатели страниц winners/garage:
winnersBtn.addEventListener('click', renderWinners);
garageBtn.addEventListener('click', renderGarage);

async function renderWinners() {
  clearPage();
  const winnersPage = new WinnersPage(body);
  await winnersPage.renderWinnersPage();
}

async function renderGarage() {
  clearPage();
  const garage = await new GaragePage(body, { color: 'yellow', text: 'VolksWagen' });
  await garage.renderCars();
  const createCarBtn = document.querySelector('.create-car__btn') as HTMLElement;
  createCarBtn.addEventListener('click', createCar);
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
