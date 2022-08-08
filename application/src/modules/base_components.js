"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseComponent = exports.baseUrl = void 0;
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
