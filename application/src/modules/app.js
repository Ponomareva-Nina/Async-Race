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
// навешиваем обработчики на кнопки в body:
body.addEventListener('click', (event) => __awaiter(void 0, void 0, void 0, function* () {
    const target = event.target;
    if (target.classList.contains('btn-garage')) {
        renderGarage();
    }
    else if (target.classList.contains('btn-winners')) {
        renderWinners();
    }
    else if (target.classList.contains('create-car__btn')) {
        createCar();
    }
    else if (target.classList.contains('btn-remove')) {
        (0, api_1.removeCar)(Number(target.id));
        renderGarage();
    }
}));
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
