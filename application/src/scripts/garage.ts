import "../styles/style.scss";
import {BaseComponent, baseUrl, car, carFeatures, winner} from './base_components';
import { CarContainer } from "./car";
import { getCars } from "./functions";

export class GaragePage extends BaseComponent {
    private carsCounter;
    private currentPage;
    private createCarsBar;
    private updateCarsBar;
    private raceControlBar;
    garageCars;
    garageTitle: BaseComponent;
   
    constructor (root: HTMLElement, data: {color: string; text: string}) {
        super(root, 'section', ['garage']);
        this.carsCounter = '0';
        this.currentPage = 1;
        

        //создание базовой разметки гаража:
        const garageControlBar = new BaseComponent(this.element, 'div', ['garage__control-bar']);

        this.createCarsBar = new CarSettingsInput(garageControlBar.element, ['create-car'], {
            btnTxt: 'Create',
            color: data.color,
            text: data.text,
          });
        this.updateCarsBar = new CarSettingsInput(garageControlBar.element, ['update-car'], {
            btnTxt: 'Update',
            color: data.color,
            text: data.text,
          });
        this.raceControlBar = new RaceControlBar(garageControlBar.element);
        

       this.garageCars = new BaseComponent(this.element, 'div', ['garage__cars']);
        this.garageTitle = new BaseComponent(this.garageCars.element, 'h2', []);
        this.garageTitle.element.innerHTML = `Garage (${this.carsCounter})`;
    }

   renderCars(){
        getCars(this.garageCars.element);
    }
}

export class RaceControlBar extends BaseComponent {
    constructor (root: HTMLElement) {
        super(root, 'div', ['race-control-bar']);
       
        const raceBtn = new BaseComponent(this.element, 'button', ['btn', 'start-race-btn']);
        raceBtn.element.textContent = 'Race';

        const resetAllBtn = new BaseComponent(this.element, 'button', ['btn', 'reset-all-btn']);
        resetAllBtn.element.textContent = 'Reset';
        const generateBtn = new BaseComponent(this.element, 'button', ['btn', 'generate-cars-btn']);
        generateBtn.element.textContent = 'Generate cars';
    }
}

export interface InputState {
    btnTxt: string;
    color: string;
    text: string;
}

export class CarSettingsInput extends BaseComponent {
    textInput: HTMLInputElement;
    colorInput: HTMLInputElement;
    btn;
    state: InputState;

    constructor (root: HTMLElement, styles: string[], state: InputState) {
        super(root, 'div', styles);
        this.state = state;

        //cоздадим текстовый инпут
        this.textInput = document.createElement('input');
        this.textInput.setAttribute('type', 'txt');
        this.textInput.classList.add(`${styles[0]}__text-input`);
        this.textInput.value = state.text;
        this.element.append(this.textInput);

        //создадим инпут для выбора цвета:
        this.colorInput = document.createElement('input');
        this.colorInput.setAttribute('type', 'color');
        this.colorInput.classList.add(`${styles[0]}__color-input`);
        this.colorInput.value = state.color;
        this.element.append(this.colorInput);

        // и кнопку:
        this.btn = new BaseComponent(this.element, 'button', ['btn',`${styles[0]}__btn`]);
        this.btn.element.textContent = this.state.btnTxt;
    }
}

