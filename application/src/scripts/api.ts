/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable no-new */
import { baseUrl } from './base_components';
import CarContainer from './car';
import carImage from './carImage';
import { WinnerRow } from './winners';

export type car = {
    id?: number;
    name: string;
    color: string;
  };

export type carStatus = {
    velocity: number;
    distance: number;
  };

export type winner = {
    id: number;
    wins: number;
    time: number;
  };

export async function getCars(root: HTMLElement) {
  fetch(`${baseUrl}/garage`)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        data.forEach((item: car) => {
          const { name } = item;
          const { color } = item;
          new CarContainer(root, name, color);
        });
      }
    });
}

export async function getWinners(root: HTMLElement) {
  fetch(`${baseUrl}/winners`)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        data.forEach(async (item: winner, index: number) => {
          const number = index + 1;
          const { id } = item;
          const color = await getCarById(id).then((car) => car.color);
          const image = carImage(color);
          const carName = await getCarById(id).then((car) => car.name); // ф-ция для поиска модели машины по id
          const { wins } = item;
          const { time } = item;
          new WinnerRow(root, number, image, carName, wins, time);
        });
      }
    });
}

export async function getCarById(id: number) {
  const response = await fetch(`${baseUrl}/garage/${id}`);
  const car = await response.json();

  return car;
}
