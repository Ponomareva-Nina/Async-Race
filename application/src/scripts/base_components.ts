export const baseUrl = 'http://127.0.0.1:3000'; 

export type car = {
  id?: number;
  name: string;
  color: string;
};

export type carFeatures = {
  velocity: number;
  distance: number;
};

export type winner = {
  id?: number;
  wins: number;
  time: number;
};

export class BaseComponent {
    readonly element: HTMLElement;
    root: HTMLElement;
  
    constructor(root: HTMLElement, tag: string = 'div', styles: string[] = []) {
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

  export class Header extends BaseComponent {
    title: BaseComponent;
    btnGarage: BaseComponent;
    btnWinners: BaseComponent;

    constructor (root: HTMLElement) {
        super(root, 'header', []);
        this.title = new BaseComponent(this.element, 'h1', []);
        this.btnGarage = new BaseComponent(this.element, 'button', ['btn', 'btn-garage']);
        this.btnWinners = new BaseComponent(this.element, 'button', ['btn', 'btn-winners']);
        this.title.element.innerHTML = 'Let the race begin!';
        this.btnGarage.element.innerHTML = 'To Garage';
        this.btnWinners.element.innerHTML = 'To Winners';
    }
  }

