"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinnerRow = exports.WinnersPage = void 0;
require("../styles/style.scss");
const base_components_1 = require("./base_components");
const api_1 = require("./api");
class WinnersPage extends base_components_1.BaseComponent {
    constructor(root) {
        super(root, 'section', ['section', 'winners']);
        this.winnersCounter = 3;
        this.currentPage = 1;
        //создание базовой разметки:
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
        this.winnersContent = new base_components_1.BaseComponent(this.element, 'div', ['winner-row']);
    }
    renderWinnersPage() {
        (0, api_1.getWinners)(this.winnersContent.element);
    }
}
exports.WinnersPage = WinnersPage;
class WinnerRow extends base_components_1.BaseComponent {
    constructor(root, id, wins, time) {
        super(root, 'div', ['winner-row']);
    }
}
exports.WinnerRow = WinnerRow;
