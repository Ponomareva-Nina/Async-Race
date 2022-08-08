"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_components_1 = require("./base_components");
class Header extends base_components_1.BaseComponent {
    constructor(root) {
        super(root, 'header', []);
        this.title = new base_components_1.BaseComponent(this.element, 'h1', []);
        this.btnGarage = new base_components_1.BaseComponent(this.element, 'button', ['btn', 'btn-garage']);
        this.btnWinners = new base_components_1.BaseComponent(this.element, 'button', ['btn', 'btn-winners']);
        this.title.element.innerHTML = 'Let the race begin!';
        this.btnGarage.element.innerHTML = 'To Garage';
        this.btnWinners.element.innerHTML = 'To Winners';
    }
}
exports.default = Header;
