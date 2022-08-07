"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarContainer = void 0;
const base_components_1 = require("./base_components");
const carImage_1 = require("./carImage");
class CarContainer extends base_components_1.BaseComponent {
    constructor(root, carName, color) {
        super(root, 'div', ['car-container']);
        this.btnSelect = new base_components_1.BaseComponent(this.element, 'button', ['btn', 'btn-select']);
        this.btnSelect.element.textContent = 'Select';
        this.btnRemove = new base_components_1.BaseComponent(this.element, 'button', ['btn', 'btn-remove']);
        this.btnRemove.element.textContent = 'Remove';
        this.carName = new base_components_1.BaseComponent(this.element, 'p', ['car-name', 'car-title']);
        this.carName.element.textContent = carName;
        this.btnStart = new base_components_1.BaseComponent(this.element, 'button', ['btn', 'start-car-btn']);
        this.btnStart.element.textContent = 'Start';
        this.btnReset = new base_components_1.BaseComponent(this.element, 'button', ['btn', 'reset-car-btn']);
        this.btnReset.element.textContent = 'Reset';
        this.carImage = new base_components_1.BaseComponent(this.element, 'div', ['car-image']);
        this.carImage.element.innerHTML = (0, carImage_1.carImage)(color);
    }
}
exports.CarContainer = CarContainer;
const getRandomCarName = function () {
    const models = [
        'BMW',
        'Mersedes',
        'Zhiguli',
        'Audi',
        'Volkswagen',
        'Lada',
        'Range Rover',
        'Renault',
        'Toyota',
        'Jaguar',
        'Lamborgini',
        'Mazda'
    ];
    const carName = models[Math.floor(Math.random() * models.length)];
    return carName;
};
const getRandomCarColor = () => {
    const colors = [
        'DarkOrange',
        'CadetBlue',
        'DarkKhaki',
        'Gold',
        'Orchid',
        'LightPink',
        'SlateBlue',
        'LightSalmon',
        'PaleVioletRed',
        'Turquoise'
    ];
    const carColor = colors[Math.floor(Math.random() * colors.length)];
    return carColor;
};
/* export function generateRandomCars = (carCount = 100): Array<car> =>
   new Array(carCount).fill(1).map(() => ({ name: getRandomCarName(), color: getRandomCarColor() }));*/ 
