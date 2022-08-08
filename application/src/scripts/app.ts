/* eslint-disable no-new */
/* eslint-disable no-use-before-define */
import '../styles/style.scss';
import '../assets/images/flag.png';

import { Header } from './base_components';
import { GaragePage } from './garage';
import { WinnersPage } from './winners';

const body: HTMLElement = document.getElementById('body') as HTMLElement;

new Header(body);
const garagePage = new GaragePage(body, { color: 'yellow', text: 'BMW' });
garagePage.renderCars();

const winnersBtn = document.querySelector('.btn-winners') as HTMLElement;
winnersBtn.addEventListener('click', () => {
  clearPage();
  const winnersPage = new WinnersPage(body);
  winnersPage.renderWinnersPage();
});

const garageBtn = document.querySelector('.btn-garage') as HTMLElement;
garageBtn.addEventListener('click', () => {
  clearPage();
  const garage = new GaragePage(body, { color: 'yellow', text: 'VolksWagen' });
  garage.renderCars();
});

function clearPage(): void {
  const section = document.querySelector('.section') as HTMLElement;
  body.removeChild(section);
}
