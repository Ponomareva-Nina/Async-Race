import { BaseComponent } from "./base_components";


export class CarContainer extends BaseComponent {
    btnSelect: BaseComponent;
    btnRemove: BaseComponent;
    carName: BaseComponent;
    btnStart: BaseComponent;
    btnReset: BaseComponent;
    carImage: BaseComponent;

    constructor (root: HTMLElement) {
        super(root, 'div', ['car-container']);
        this.btnSelect = new BaseComponent(this.element, 'button', ['btn btn-select']);
        this.btnRemove = new BaseComponent(this.element, 'button', ['btn btn-remove']);
        this.carName = new BaseComponent(this.element, 'p', ['car-name']);
        this.btnStart = new BaseComponent(this.element, 'button', ['btn start-car-btn']);
        this.btnReset = new BaseComponent(this.element, 'button', ['btn reset-car-btn']);
        this.carImage = new BaseComponent(this.element, 'div', ['car-image']);
    }
}   
