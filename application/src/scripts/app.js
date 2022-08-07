"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../styles/style.scss");
const base_components_1 = require("./base_components");
const garage_1 = require("./garage");
const body = document.getElementById('body');
const header = new base_components_1.Header(body);
const garagePage = new garage_1.GaragePage(body, { color: 'yellow', text: '' });
garagePage.renderCars();
