"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinnerRow = exports.WinnersPage = void 0;
/* eslint-disable max-len */
/* eslint-disable max-classes-per-file */
require("../styles/style.scss");
const base_components_1 = require("./base_components");
const api_1 = require("./api");
class WinnersPage extends base_components_1.BaseComponent {
    constructor(root) {
        super(root, 'section', ['section', 'winners']);
        this.winnersCounter = 1;
        this.currentPage = 1;
        //  создание базовой разметки:
        this.winnersTitle = new base_components_1.BaseComponent(this.element, 'h2', []);
        this.winnersTitle.element.textContent = `Winners (${this.winnersCounter})`;
        this.winnersContainer = new base_components_1.BaseComponent(this.element, 'div', ['winners-container']);
        this.tableHeaders = new base_components_1.BaseComponent(this.element, 'div', ['table-headers']);
        this.header1 = new base_components_1.BaseComponent(this.tableHeaders.element, 'div', []);
        this.header2 = new base_components_1.BaseComponent(this.tableHeaders.element, 'div', []);
        this.header3 = new base_components_1.BaseComponent(this.tableHeaders.element, 'div', []);
        this.header4 = new base_components_1.BaseComponent(this.tableHeaders.element, 'div', []);
        this.header5 = new base_components_1.BaseComponent(this.tableHeaders.element, 'div', []);
        this.header1.element.textContent = 'Number';
        this.header2.element.textContent = 'Car';
        this.header3.element.textContent = 'Name';
        this.header4.element.textContent = 'Wins';
        this.header5.element.textContent = 'Best Time (sec)';
        this.winnersContent = new base_components_1.BaseComponent(this.element, 'div', ['winner-rows']);
    }
    renderWinnersPage() {
        (0, api_1.getWinners)(this.winnersContent.element);
    }
}
exports.WinnersPage = WinnersPage;
class WinnerRow extends base_components_1.BaseComponent {
    constructor(root, number, image, car, wins, time) {
        super(root, 'div', ['winner-row']);
        this.numberCol = new base_components_1.BaseComponent(this.element, 'div', ['number']);
        this.numberCol.element.textContent = number.toString();
        this.carCol = new base_components_1.BaseComponent(this.element, 'div', ['car']);
        this.carCol.element.innerHTML = image;
        this.nameCol = new base_components_1.BaseComponent(this.element, 'div', ['name']);
        this.nameCol.element.textContent = car;
        this.winsCol = new base_components_1.BaseComponent(this.element, 'div', ['wins']);
        this.winsCol.element.textContent = wins.toString();
        this.timeCol = new base_components_1.BaseComponent(this.element, 'div', ['time']);
        this.timeCol.element.textContent = time.toString();
    }
}
exports.WinnerRow = WinnerRow;
