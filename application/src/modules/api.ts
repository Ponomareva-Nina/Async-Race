/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable no-new */
import {
  baseUrl, car, winner,
} from './base_components';
import CarContainer from './car';
import carImage from './carImage';
import { WinnerRow } from './winners';

export async function getCars(root: HTMLElement) {
  fetch(`${baseUrl}/garage`)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        data.forEach((item: car) => {
          const { name } = item;
          const { color } = item;
          const index = Number(item.id);
          new CarContainer(root, name, color, index);
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

export async function createNewCar(car: car) {
  return (await fetch(`${baseUrl}/garage`, {
    method: 'POST',
    body: JSON.stringify(car),
    headers: {
      'Content-Type': 'application/json',
    },
  })).json();
}

export async function removeCar(id: number) {
  return (await fetch(`${baseUrl}/garage/${id}`, {
    method: 'DELETE',
  })).json();
}
