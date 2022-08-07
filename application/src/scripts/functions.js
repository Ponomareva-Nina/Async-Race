"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCars = void 0;
const base_components_1 = require("./base_components");
const car_1 = require("./car");
function getCars(root) {
    fetch(`${base_components_1.baseUrl}/garage`)
        .then(response => response.json())
        .then(data => {
        if (data) {
            data.forEach((item) => {
                let name = item.name;
                let color = item.color;
                new car_1.CarContainer(root, name, color);
            });
        }
    });
}
exports.getCars = getCars;
