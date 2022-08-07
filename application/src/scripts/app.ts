import '../styles/style.scss';
import '../assets/images/flag.png';

import {Header} from './base_components';
import { GaragePage } from "./garage";
import { WinnersPage } from './winners';

const body: HTMLElement = document.getElementById('body') as HTMLElement;

const header = new Header(body);
const garagePage = new GaragePage(body, {color: 'yellow', text: 'BMW'}); 
garagePage.renderCars();

const winnersBtn = document.querySelector('.btn-winners') as HTMLElement;
winnersBtn.addEventListener('click', () => {
    clearPage();
    let winnersPage = new WinnersPage(body);
    winnersPage.renderWinnersPage();
});

const garageBtn = document.querySelector('.btn-garage') as HTMLElement;
garageBtn.addEventListener('click', () => {
    clearPage();
    let garage = new GaragePage(body, {color: 'yellow', text: 'VolksWagen'});
    garage.renderCars();
});

function clearPage(): void {
    let section = document.querySelector('.section') as HTMLElement;
    body.removeChild(section);
};
