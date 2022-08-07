"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../styles/style.scss");
require("../assets/images/flag.png");
const base_components_1 = require("./base_components");
const garage_1 = require("./garage");
const winners_1 = require("./winners");
const body = document.getElementById('body');
const header = new base_components_1.Header(body);
const garagePage = new garage_1.GaragePage(body, { color: 'yellow', text: 'BMW' });
garagePage.renderCars();
const winnersBtn = document.querySelector('.btn-winners');
winnersBtn.addEventListener('click', () => {
    clearPage();
    let winnersPage = new winners_1.WinnersPage(body);
    winnersPage.renderWinnersPage();
});
const garageBtn = document.querySelector('.btn-garage');
garageBtn.addEventListener('click', () => {
    clearPage();
    let garage = new garage_1.GaragePage(body, { color: 'yellow', text: 'VolksWagen' });
    garage.renderCars();
});
function clearPage() {
    let section = document.querySelector('.section');
    body.removeChild(section);
}
;
