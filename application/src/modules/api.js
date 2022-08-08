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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCar = exports.createNewCar = exports.getCarById = exports.getWinners = exports.getCars = void 0;
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable no-new */
const base_components_1 = require("./base_components");
const car_1 = __importDefault(require("./car"));
const carImage_1 = __importDefault(require("./carImage"));
const winners_1 = require("./winners");
function getCars(root) {
    return __awaiter(this, void 0, void 0, function* () {
        fetch(`${base_components_1.baseUrl}/garage`)
            .then((response) => response.json())
            .then((data) => {
            if (data) {
                data.forEach((item) => {
                    const { name } = item;
                    const { color } = item;
                    new car_1.default(root, name, color);
                });
            }
        });
    });
}
exports.getCars = getCars;
function getWinners(root) {
    return __awaiter(this, void 0, void 0, function* () {
        fetch(`${base_components_1.baseUrl}/winners`)
            .then((response) => response.json())
            .then((data) => {
            if (data) {
                data.forEach((item, index) => __awaiter(this, void 0, void 0, function* () {
                    const number = index + 1;
                    const { id } = item;
                    const color = yield getCarById(id).then((car) => car.color);
                    const image = (0, carImage_1.default)(color);
                    const carName = yield getCarById(id).then((car) => car.name); // ф-ция для поиска модели машины по id
                    const { wins } = item;
                    const { time } = item;
                    new winners_1.WinnerRow(root, number, image, carName, wins, time);
                }));
            }
        });
    });
}
exports.getWinners = getWinners;
function getCarById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${base_components_1.baseUrl}/garage/${id}`);
        const car = yield response.json();
        return car;
    });
}
exports.getCarById = getCarById;
function createNewCar(car) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield fetch(`${base_components_1.baseUrl}/garage`, {
            method: 'POST',
            body: JSON.stringify(car),
            headers: {
                'Content-Type': 'application/json',
            },
        })).json();
    });
}
exports.createNewCar = createNewCar;
function deleteCar(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield fetch(`${base_components_1.baseUrl}/garage/${id}`, {
            method: 'DELETE',
        })).json();
    });
}
exports.deleteCar = deleteCar;
