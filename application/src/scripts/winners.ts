import "../styles/style.scss";
import { BaseComponent } from "./base_components";
import { getWinners } from "./api";
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
        this.winnersCounter = 3;
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

        this.winnersContent = new BaseComponent(this.element, 'div', ['winner-row']);  
    }
    
    renderWinnersPage() {
        getWinners(this.winnersContent.element);
    }
}

export class WinnerRow extends BaseComponent {

    constructor (root: HTMLElement, id: number, wins: number, time: number) {
        super(root, 'div', ['winner-row'])
    }
}