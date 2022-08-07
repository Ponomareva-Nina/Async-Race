"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWinners = exports.getCars = void 0;
const base_components_1 = require("./base_components");
const car_1 = require("./car");
const winners_1 = require("./winners");
function getCars(root) {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
exports.getCars = getCars;
function getWinners(root) {
    return __awaiter(this, void 0, void 0, function* () {
        fetch(`$baseURL}/winners`)
            .then(response => response.json())
            .then(data => {
            if (data) {
                data.forEach((item) => {
                    let id = item.id;
                    let wins = item.wins;
                    let time = item.time;
                    new winners_1.WinnerRow(root, id, wins, time);
                });
            }
        });
    });
}
exports.getWinners = getWinners;
