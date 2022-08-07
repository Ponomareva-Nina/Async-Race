import "../styles/style.scss";
import {BaseComponent, Header, baseUrl, car, carFeatures, winner} from './base_components';
import { GaragePage } from "./garage";

const body: HTMLElement = document.getElementById('body') as HTMLElement;

const header = new Header(body);
const garagePage = new GaragePage(body, {color: 'yellow', text: ''}); 
garagePage.renderCars();