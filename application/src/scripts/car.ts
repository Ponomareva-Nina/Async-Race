/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import { BaseComponent, baseUrl } from './base_components';
import carImage from './carImage';

export default class CarContainer extends BaseComponent {
  btnSelect: BaseComponent;

  btnRemove: BaseComponent;

  carName: BaseComponent;

  btnStart: BaseComponent;

  btnReset: BaseComponent;

  carImage: BaseComponent;

  constructor(root: HTMLElement, carName: string, color: string) {
    super(root, 'div', ['car-container']);
    this.btnSelect = new BaseComponent(this.element, 'button', ['btn', 'btn-select']);
    this.btnSelect.element.textContent = 'Select';
    this.btnRemove = new BaseComponent(this.element, 'button', ['btn', 'btn-remove']);
    this.btnRemove.element.textContent = 'Remove';
    this.carName = new BaseComponent(this.element, 'p', ['car-name', 'car-title']);
    this.carName.element.textContent = carName;
    this.btnStart = new BaseComponent(this.element, 'button', ['btn', 'start-car-btn']);
    this.btnStart.element.textContent = 'Start';
    this.btnReset = new BaseComponent(this.element, 'button', ['btn', 'reset-car-btn']);
    this.btnReset.element.textContent = 'Reset';
    this.carImage = new BaseComponent(this.element, 'div', ['car-image']);
    this.carImage.element.innerHTML = carImage(color);
  }
}

/*
const getRandomCarName = function () {
  const models = [
    'BMW',
    'Mersedes',
    'Zhiguli',
    'Audi',
    'Volkswagen',
    'Lada',
    'Range Rover',
    'Renault',
    'Toyota',
    'Jaguar',
    'Lamborgini',
    'Mazda',
  ];

  const carName = models[Math.floor(Math.random() * models.length)];
  return carName;
};

const getRandomCarColor = () => {
  const colors = [
    'DarkOrange',
    'CadetBlue',
    'DarkKhaki',
    'Gold',
    'Orchid',
    'LightPink',
    'SlateBlue',
    'LightSalmon',
    'PaleVioletRed',
    'Turquoise',
  ];

  const carColor = colors[Math.floor(Math.random() * colors.length)];
  return carColor;
};

export function generateRandomCars = (carCount = 100): Array<car> =>
    new Array(carCount).fill(1).map(() => ({ name: getRandomCarName(), color: getRandomCarColor() })); */
