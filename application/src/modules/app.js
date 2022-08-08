"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-new */
/* eslint-disable no-use-before-define */
require("../styles/style.scss");
require("../assets/images/flag.png");
const header_1 = __importDefault(require("./header"));
const garage_1 = require("./garage");
const winners_1 = require("./winners");
const api_1 = require("./api");
const body = document.getElementById('body');
new header_1.default(body);
renderGarage();
const garageBtn = document.querySelector('.btn-garage');
const winnersBtn = document.querySelector('.btn-winners');
// навешиваем обработчики на кнопки-переключатели страниц winners/garage:
winnersBtn.addEventListener('click', renderWinners);
garageBtn.addEventListener('click', renderGarage);
function renderWinners() {
    return __awaiter(this, void 0, void 0, function* () {
        clearPage();
        const winnersPage = new winners_1.WinnersPage(body);
        yield winnersPage.renderWinnersPage();
    });
}
function renderGarage() {
    return __awaiter(this, void 0, void 0, function* () {
        clearPage();
        const garage = yield new garage_1.GaragePage(body, { color: 'yellow', text: 'VolksWagen' });
        yield garage.renderCars();
        const createCarBtn = document.querySelector('.create-car__btn');
        createCarBtn.addEventListener('click', createCar);
    });
}
function clearPage() {
    const section = document.querySelector('.section');
    if (section) {
        body.removeChild(section);
    }
}
function createCar() {
    return __awaiter(this, void 0, void 0, function* () {
        const nameInput = document.querySelector('.create-car__text-input');
        const colorInput = document.querySelector('.create-car__color-input');
        const newCar = { name: nameInput.value, color: colorInput.value };
        yield (0, api_1.createNewCar)(newCar);
        yield renderGarage();
    });
}
