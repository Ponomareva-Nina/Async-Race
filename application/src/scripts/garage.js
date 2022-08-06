"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarSettingsInput = exports.RaceControlBar = exports.GaragePage = void 0;
require("../styles/style.scss");
const base_components_1 = require("./base_components");
class GaragePage extends base_components_1.BaseComponent {
    constructor(root, data) {
        super(root, 'section', ['garage']);
        this.carsCounter = '0';
        this.currentPage = 1;
        //создание базовой разметки гаража:
        const garageControlBar = new base_components_1.BaseComponent(this.element, 'div', ['garage__control-bar']);
        this.createCarsBar = new CarSettingsInput(garageControlBar.element, ['create-car'], {
            btnTxt: 'Create',
            color: data.color,
            text: data.text,
        });
        this.updateCarsBar = new CarSettingsInput(garageControlBar.element, ['update-car'], {
            btnTxt: 'Update',
            color: data.color,
            text: data.text,
        });
        this.raceControlBar = new RaceControlBar(garageControlBar.element);
        const garageCars = new base_components_1.BaseComponent(this.element, 'div', ['garage__cars']);
        this.garageTitle = new base_components_1.BaseComponent(garageCars.element, 'h2', []);
        this.garageTitle.element.innerHTML = `Garage (${this.carsCounter})`;
    }
}
exports.GaragePage = GaragePage;
class RaceControlBar extends base_components_1.BaseComponent {
    constructor(root) {
        super(root, 'div', ['race-control-bar']);
        const raceBtn = new base_components_1.BaseComponent(this.element, 'button', ['btn', 'start-race-btn']);
        raceBtn.element.textContent = 'Race';
        const resetAllBtn = new base_components_1.BaseComponent(this.element, 'button', ['btn', 'reset-all-btn']);
        resetAllBtn.element.textContent = 'Reset';
        const generateBtn = new base_components_1.BaseComponent(this.element, 'button', ['btn', 'generate-cars-btn']);
        generateBtn.element.textContent = 'Generate cars';
    }
}
exports.RaceControlBar = RaceControlBar;
class CarSettingsInput extends base_components_1.BaseComponent {
    constructor(root, styles, state) {
        super(root, 'div', styles);
        this.state = state;
        //cоздадим текстовый инпут
        this.textInput = document.createElement('input');
        this.textInput.setAttribute('type', 'txt');
        this.textInput.classList.add(`${styles[0]}__text-input`);
        this.textInput.value = state.text;
        this.element.append(this.textInput);
        //создадим инпут для выбора цвета:
        this.colorInput = document.createElement('input');
        this.colorInput.setAttribute('type', 'color');
        this.colorInput.classList.add(`${styles[0]}__colorInput`);
        this.colorInput.value = state.color;
        this.element.append(this.colorInput);
        // и кнопку:
        this.btn = new base_components_1.BaseComponent(this.element, 'button', ['btn', `${styles[0]}__btn`]);
        this.btn.element.textContent = this.state.btnTxt;
    }
}
exports.CarSettingsInput = CarSettingsInput;
