"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarContainer = void 0;
const base_components_1 = require("./base_components");
class CarContainer extends base_components_1.BaseComponent {
    constructor(root) {
        super(root, 'div', ['car-container']);
        this.btnSelect = new base_components_1.BaseComponent(this.element, 'button', ['btn btn-select']);
        this.btnRemove = new base_components_1.BaseComponent(this.element, 'button', ['btn btn-remove']);
        this.carName = new base_components_1.BaseComponent(this.element, 'p', ['car-name']);
        this.btnStart = new base_components_1.BaseComponent(this.element, 'button', ['btn start-car-btn']);
        this.btnReset = new base_components_1.BaseComponent(this.element, 'button', ['btn reset-car-btn']);
        this.carImage = new base_components_1.BaseComponent(this.element, 'div', ['car-image']);
    }
}
exports.CarContainer = CarContainer;
