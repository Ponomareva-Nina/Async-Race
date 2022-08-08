import { BaseComponent } from './base_components';

export default class Header extends BaseComponent {
  title: BaseComponent;

  btnGarage: BaseComponent;

  btnWinners: BaseComponent;

  constructor(root: HTMLElement) {
    super(root, 'header', []);
    this.title = new BaseComponent(this.element, 'h1', []);
    this.btnGarage = new BaseComponent(this.element, 'button', ['btn', 'btn-garage']);
    this.btnWinners = new BaseComponent(this.element, 'button', ['btn', 'btn-winners']);
    this.title.element.innerHTML = 'Let the race begin!';
    this.btnGarage.element.innerHTML = 'To Garage';
    this.btnWinners.element.innerHTML = 'To Winners';
  }
}
