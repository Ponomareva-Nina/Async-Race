"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = exports.BaseComponent = exports.baseUrl = void 0;
exports.baseUrl = 'http://127.0.0.1:3000';
class BaseComponent {
    constructor(root, tag = 'div', styles = []) {
        this.element = document.createElement(tag);
        if (styles.length) {
            this.element.classList.add(...styles);
        }
        this.root = root;
        this.root.append(this.element);
    }
    remove() {
        this.element.remove();
    }
    add() {
        this.root.append(this.element);
    }
}
exports.BaseComponent = BaseComponent;
class Header extends BaseComponent {
    constructor(root) {
        super(root, 'header', []);
        this.title = new BaseComponent(this.element, 'h1', []);
        this.btnGarage = new BaseComponent(this.element, 'button', ['btn', 'btn-garage']);
        this.btnWinners = new BaseComponent(this.element, 'button', ['btn', 'btn-winners']);
        this.title.element.innerHTML = 'Let the race begin!';
        this.btnGarage.element.innerHTML = 'To Garage';
        this.btnWinners.element.innerHTML = 'To Winners';
    }
}
exports.Header = Header;
