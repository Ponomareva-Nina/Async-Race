"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
const base_components_1 = require("./base_components");
const carImage_1 = __importDefault(require("./carImage"));
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
        this.carImage.element.innerHTML = (0, carImage_1.default)(color);
    }
}
exports.default = CarContainer;
