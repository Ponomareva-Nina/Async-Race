import "../styles/style.scss";
import { BaseComponent } from "./base_components";
import { getWinners } from "./api";
import { carImage } from "./carImage";
import { CarContainer } from "./car";
export class WinnersPage extends BaseComponent {
    private winnersCounter;
    private currentPage;
    winnersContainer: BaseComponent;
    tableHeaders: BaseComponent;
    winnersContent: BaseComponent;
    header1: BaseComponent;
    header2: BaseComponent;
    header3: BaseComponent;
    header4: BaseComponent;
    header5: BaseComponent;
    winnersTitle: BaseComponent;
       
    constructor (root: HTMLElement) {
        super(root, 'section', ['section', 'winners']);
        this.winnersCounter = 1;
        this.currentPage = 1;
        
        //создание базовой разметки:
        this.winnersTitle = new BaseComponent(this.element, 'h2', []);
        this.winnersTitle.element.textContent = `Winners (${this.winnersCounter})`;

        this.winnersContainer = new BaseComponent(this.element, 'div', ['winners-container']);
        this.tableHeaders = new BaseComponent(this.element, 'div', ['table-headers']);
        this.header1 = new BaseComponent(this.tableHeaders.element, 'div', []);
        this.header2 = new BaseComponent(this.tableHeaders.element, 'div', []);
        this.header3 = new BaseComponent(this.tableHeaders.element, 'div', []);
        this.header4 = new BaseComponent(this.tableHeaders.element, 'div', []);
        this.header5 = new BaseComponent(this.tableHeaders.element, 'div', []);
        this.header1.element.textContent = 'Number';
        this.header2.element.textContent = 'Car';
        this.header3.element.textContent = 'Name';
        this.header4.element.textContent = 'Wins';
        this.header5.element.textContent = 'Best Time (sec)';

        this.winnersContent = new BaseComponent(this.element, 'div', ['winner-rows']);  
    }
    
    renderWinnersPage() {
        getWinners(this.winnersContent.element);
    }
}

export class WinnerRow extends BaseComponent {
    numberCol;
    carCol;
    nameCol;
    winsCol;
    timeCol;

    constructor (root: HTMLElement, number: number, image: string, car: string, wins: number, time: number) {
        super(root, 'div', ['winner-row'])
        this.numberCol = new BaseComponent(this.element, 'div', ['number']); 
        this.numberCol.element.textContent = number.toString();
        this.carCol = new BaseComponent(this.element, 'div', ['car']);
        this.carCol.element.innerHTML = image;
        this.nameCol = new BaseComponent(this.element, 'div', ['name']);
        this.nameCol.element.textContent = car;
        this.winsCol = new BaseComponent(this.element, 'div', ['wins']);
        this.winsCol.element.textContent = wins.toString();
        this.timeCol = new BaseComponent(this.element, 'div', ['time']);
        this.timeCol.element.textContent = time.toString();
    }
}