"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarContainer = void 0;
const base_components_1 = require("./base_components");
const carImage_1 = require("./carImage");
class CarContainer extends base_components_1.BaseComponent {
    constructor(root, carName, carColor) {
        super(root, 'div', ['car-container']);
        this.btnSelect = new base_components_1.BaseComponent(this.element, 'button', ['btn', 'btn-select']);
        this.btnSelect.element.textContent = 'Select';
        this.btnRemove = new base_components_1.BaseComponent(this.element, 'button', ['btn', 'btn-remove']);
        this.btnRemove.element.textContent = 'Remove';
        this.carName = new base_components_1.BaseComponent(this.element, 'p', ['car-name']);
        this.carName.element.textContent = carName;
        this.btnStart = new base_components_1.BaseComponent(this.element, 'button', ['btn', 'start-car-btn']);
        this.btnStart.element.textContent = 'A';
        this.btnReset = new base_components_1.BaseComponent(this.element, 'button', ['btn', 'reset-car-btn']);
        this.btnReset.element.textContent = 'B';
        this.carImage = new base_components_1.BaseComponent(this.element, 'div', ['car-image']);
        this.carImage.element.innerHTML = (0, carImage_1.carImage)(carColor);
    }
}
exports.CarContainer = CarContainer;
