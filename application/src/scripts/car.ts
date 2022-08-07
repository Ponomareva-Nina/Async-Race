import { BaseComponent, baseUrl } from './base_components';
import { carImage } from './carImage'

export class CarContainer extends BaseComponent {
    btnSelect: BaseComponent;
    btnRemove: BaseComponent;
    carName: BaseComponent;
    btnStart: BaseComponent;
    btnReset: BaseComponent;
    carImage: BaseComponent;

    constructor (root: HTMLElement, carName: string, carColor: string) {
        super(root, 'div', ['car-container']);
        this.btnSelect = new BaseComponent(this.element, 'button', ['btn', 'btn-select']);
        this.btnSelect.element.textContent = 'Select';
        this.btnRemove = new BaseComponent(this.element, 'button', ['btn', 'btn-remove']);
        this.btnRemove.element.textContent = 'Remove';
        this.carName = new BaseComponent(this.element, 'p', ['car-name']);
        this.carName.element.textContent = carName;
        this.btnStart = new BaseComponent(this.element, 'button', ['btn', 'start-car-btn']);
        this.btnStart.element.textContent = 'A';
        this.btnReset = new BaseComponent(this.element, 'button', ['btn', 'reset-car-btn']);
        this.btnReset.element.textContent = 'B';
        this.carImage = new BaseComponent(this.element, 'div', ['car-image']);
        this.carImage.element.innerHTML = carImage(carColor);
    }
}   

